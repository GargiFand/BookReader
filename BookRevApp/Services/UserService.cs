
using BooksRevApp.Model;
using BooksRevApp.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BooksRevApp.DbContexts;
using Microsoft.AspNetCore.SignalR;

namespace BooksRevApp.Services
{
    public interface IUserService
    {
        Task<User> Authenticate(string username, string password);
        Task<IEnumerable<User>> GetAll();
        Task<User> GetUserById(long id);
        Task<User> GetUserByUsernameAndEmail(string username, string email);
        Task<User> Register(User user);
        bool UsernameExists(string username);
        Task<bool> SaveAll();
        Task<IEnumerable<Book>> GetFavouriteBooks(long userId);

        public long GetUserId();
    }
    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private readonly BooksContext _context;
        private static long UserId;

        public UserService(IOptions<AppSettings> appSettings, BooksContext context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        public async Task<User> Authenticate(string username, string password)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Username == username && x.Password == HashUtils.GetHashString(password));

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Role, user.UserRole)
                }),
                Expires = DateTime.UtcNow.AddDays(3),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            UserId = user.Id;

            return user;
        }
        public async Task<User> Register(User user)
        {
            await _context.Users.AddAsync(user);

            return user;
        }

        public bool UsernameExists(string username)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username) != null;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<User> GetUserById(long id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        public long GetUserId()
        {
            return UserId;
        }

        public async Task<User> GetUserByUsernameAndEmail(string username, string email)
        {
            return await _context.Users
                                .FirstOrDefaultAsync(u => u.Username == username && u.Email == email);
        }

        public async Task<IEnumerable<Book>> GetFavouriteBooks(long userId)
        {
            var favouriteBooks = await _context.FavouriteBooks
                                                .Include(fv => fv.Book)
                                                .ThenInclude(m => m.UserRatings)
                                                .Where(fv => fv.Id == userId)
                                                .Select(fv => fv.Book)
                                                .ToListAsync();
            return favouriteBooks;
        }


        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}