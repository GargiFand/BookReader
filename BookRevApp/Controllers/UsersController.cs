using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using BooksRevApp.Model;
using BooksRevApp.Services;
using AutoMapper;
using System.Net.Mail;
using BooksRevApp.ViewModel;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using BooksRevApp.Helpers;


namespace BooksRevApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly SmtpClient _smtpClient;

        public UsersController(IUserService userService, IMapper mapper, SmtpClient smtpClient)
        {
            _userService = userService;
            _mapper = mapper;
            _smtpClient = smtpClient;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticatePostModel model)
        {
            var user = await _userService.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new { message = "Incorrect credentials!" });

            var userToReturn = _mapper.Map<UserToken>(user);

            return Ok(userToReturn);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _userService.GetAll();

            var usersToReturn = _mapper.Map<IEnumerable<UserDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(long id)
        {
          /*  if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            */
            
            var user = await _userService.GetUserById(id);
            var result = _mapper.Map<UserDto>(user);

            return Ok(result);
        }

        [HttpGet("{id}/favouritebooks")]
        public async Task<IActionResult> GetUsersFavouriteBooks(long id)
        {
            // TODO
            //if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //{
            //    return Unauthorized();
            //}

            var books = await _userService.GetFavouriteBooks(id);
            var result = _mapper.Map<IEnumerable<BookDto>>(books);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserToUpdate userToUpdate)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var userFromRepo = await _userService.GetUserById(id);

            if (userFromRepo == null)
            {
                return BadRequest();
            }

            if (_userService.UsernameExists(userToUpdate.Username) && userToUpdate.Username != userFromRepo.Username)
            {
                return BadRequest("Username already taken");
            }

            _mapper.Map(userToUpdate, userFromRepo);

            await _userService.SaveAll();

            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Register(UserToCreate user)
        {
            if (_userService.UsernameExists(user.Username))
            {
                return BadRequest("Username already exists");
            }

            var userEntity = _mapper.Map<User>(user);

            await _userService.Register(userEntity);

            if (await _userService.SaveAll())
            {
                var userToReturn = _mapper.Map<UserToken>(userEntity);

                return Ok(userToReturn);
            }

            return BadRequest("Could not register the user");
        }

        [AllowAnonymous]
        [HttpPost("forgotPassword")]
        public async Task<IActionResult> ForgotPassword(UserToPasswordRecorder userToPasswordRecorer)
        {
            var user = await _userService.GetUserByUsernameAndEmail(userToPasswordRecorer.Username, userToPasswordRecorer.Email);

            if (user == null)
            {
                return Ok();
            }

            var password = "password";

            user.Password = HashUtils.GetHashString(password);
            await _userService.SaveAll();

            await _smtpClient.SendMailAsync(
                 new MailMessage(
                     "alexandru.muresan@gmail.com",
                     user.Email,
                     "Reset Password",
                     $"Your new password for BooksRevApp user {user.Username} account is: {password}"));

            return Ok();
        }
    }
}