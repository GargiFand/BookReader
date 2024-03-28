using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using BooksRevApp.Model;
using AutoMapper;
using BooksRevApp.ViewModel;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using BooksRevApp.DbContexts;
using BooksRevApp.Services;

namespace BooksRevApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly BooksContext _context;
        private readonly IMapper _mapper;
        private readonly IUserService _user;

        public CommentsController(BooksContext context, IMapper mapper, IUserService userService)
        {
            _context = context;
            _mapper = mapper;
            _user = userService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommentToApproveDto>>> GetComments()
        {
            var userComments = await _context.UserComments
                                            .Include(uc => uc.Comment)
                                            .Include(uc => uc.User)
                                            .Include(uc => uc.Book)
                                            .IgnoreQueryFilters()
                                            .Where(uc => uc.Comment.IsApproved == false)
                                            .OrderByDescending(uc => uc.Comment.WhenAdded)
                                            .ToListAsync();

            var comments = _mapper.Map<IEnumerable<CommentToApproveDto>>(userComments);

            return Ok(comments);
        }

        [HttpPost("approve/{id}")]
        public async Task<IActionResult> ApproveComment(long id)
        {
            var comment = await _context.Comments
                                    .IgnoreQueryFilters()
                                    .FirstOrDefaultAsync(c => c.Id == id && c.IsApproved == false);

            if (comment == null)
            {
                BadRequest();
            }

            comment.IsApproved = true;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("reject/{id}")]
        public async Task<IActionResult> RejectComment(long id)
        {
            var comment = await _context.Comments
                                    .IgnoreQueryFilters()
                                    .FirstOrDefaultAsync(c => c.Id == id && c.IsApproved == false);

            if (comment == null)
            {
                return NotFound();
            }

            var userComment = await _context.UserComments.FirstOrDefaultAsync(uc => uc.CommentId == id);
            if (userComment != null)
            {
                _context.UserComments.Remove(userComment);
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{commentId}")]
        public async Task<ActionResult<Comment>> PutComment(long commentId, CommentToUpdate commentForUpdate)
        {
            // Authorize: check if user submitting is the same as author of the comment
            UserComment userComment = await _context.UserComments.FirstOrDefaultAsync(uc => uc.CommentId == commentId);
            if (userComment == null)
            {
                return BadRequest();
            }
            if (userComment.UserId != _user.GetUserId())
            {
                return Unauthorized();
            }

            var comment = await _context.Comments.FirstOrDefaultAsync(c => c.Id == commentId);

            if (commentId != commentForUpdate.Id)
            {
                return BadRequest();
            }

            if (!CommentExists(commentId))
            {
                return NotFound();
            }

            comment.Text = commentForUpdate.Text;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{userCommentId}")]
        public async Task<ActionResult<Comment>> DeleteComment(long userCommentId)
        {
            if (!UserCommentExists(userCommentId))
            {
                return NotFound();
            }

            UserComment userComment = await _context.UserComments.FirstOrDefaultAsync(uc => uc.Id == userCommentId);
            if (userComment.UserId != _user.GetUserId())
            {
                return Unauthorized();
            }

            var commentId = userComment.CommentId;
            if (!CommentExists(commentId))
            {
                return NotFound();
            }

            var comment = await _context.Comments.FirstOrDefaultAsync(c => c.Id == commentId);

            _context.UserComments.Remove(userComment);
            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return Ok();
        }


        private bool CommentExists(long id)
        {
            return _context.Comments.Any(e => e.Id == id);
        }
        private bool UserCommentExists(long id)
        {
            return _context.UserComments.Any(e => e.Id == id);
        }
    }
}
