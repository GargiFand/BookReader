using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using BooksRevApp.ViewModel;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using AutoMapper;
using BooksRevApp.DbContexts;
using BooksRevApp.Model;
using System.Diagnostics;
using BooksRevApp.Services;

namespace BooksRevApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BooksContext _context;
        private readonly IMapper _mapper;
        private readonly IUserService _user;

        public BooksController(BooksContext context, IMapper mapper, IUserService userService)
        {
            _context = context;
            _mapper = mapper;
            _user = userService;
        }

        // GET: api/Books
        /// <summary>
        /// Get list of books
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookDto>>> GetBook(string searchText = null)
        {
            var result = _context.Books as IQueryable<Book>;
            if (searchText != null)
            {
                result = result.Where(m => m.Title.ToLower().Contains(searchText.ToLower()) ||
                                            m.Description.ToLower().Contains(searchText.ToLower()));
            }

            var bookFromRepository = await result
                                                .Include(m => m.UserRatings)
                                                .ToListAsync();
            var bookToReturn = _mapper.Map<IEnumerable<BookDto>>(bookFromRepository);
            return Ok(bookToReturn);
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookDetailViewDto>> GetBook(long id)
        {
            var book = await _context.Books
                                        .Include(m => m.UserRatings)
                                        .Include(m => m.UserComments).ThenInclude(uc => uc.User)
                                        .Include(m => m.UserComments).ThenInclude(uc => uc.Comment)
                                        .FirstOrDefaultAsync(m => m.Id == id);

            if (book == null)
            {
                return NotFound();
            }

            var bookToReturn = _mapper.Map<BookDetailViewDto>(book);

            return bookToReturn;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(long id, BookDto book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            var bookEntity = _mapper.Map<Book>(book);

            _context.Entry(bookEntity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [Authorize(Roles = UserRole.Admin)]
        [HttpPost]
        public async Task<ActionResult<BookDetailViewDto>> PostBook(BookToCreateDto book)
        {
            var bookEntity = _mapper.Map<Book>(book);
            _context.Books.Add(bookEntity);
            await _context.SaveChangesAsync();

            var bookToReturn = _mapper.Map<BookDetailViewDto>(bookEntity);

            return CreatedAtAction("GetBook", new { id = bookToReturn.Id }, bookToReturn);
        }

        // DELETE: api/Books/5
        [Authorize(Roles = UserRole.Admin)]
        [HttpDelete("{id}")]
        public async Task<ActionResult<BookDto>> DeleteBook(long id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            var bookToReturn = _mapper.Map<BookDto>(book);

            return bookToReturn;
        }

        [HttpPost("{bookId}/comments")]
        public async Task<ActionResult<Comment>> PostComment(long bookId, CommentToCreate commentToCreate)
        {
            long userId = _user.GetUserId();

            if (!BookExists(bookId))
            {
                return BadRequest();
            }

            var comment = _mapper.Map<Comment>(commentToCreate);
            comment.WhenAdded = DateTime.Now;
            comment.IsApproved = false;

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            var newComment = await _context.Comments
                .IgnoreQueryFilters()
                .FirstOrDefaultAsync(c => c.Id == comment.Id);

            var userComment = new UserComment { UserId = userId, CommentId = comment.Id, BookId = bookId };
            _context.UserComments.Add(userComment);
            await _context.SaveChangesAsync();

            var updatedBook = await _context.Books.FindAsync(bookId);
            updatedBook.UserComments.Add(userComment);

            var updatedUser = await _context.Users.FindAsync(userId);
            updatedUser.UserComments.Add(userComment);

            return Ok();
        }

        [Authorize]
        [HttpPost("{bookId}/ratings")]
        public async Task<IActionResult> PostRating(long bookId, UserRating userRating)
        {
            var existingRating = await _context.UserRatings.Where(
                ur => ur.UserId == userRating.UserId && ur.BookId == userRating.BookId
                ).SingleOrDefaultAsync();

            if (existingRating != null)
            {
                existingRating.RatingValue = userRating.RatingValue;

                await _context.SaveChangesAsync();
            }
            else
            {
                _context.UserRatings.Add(userRating);

                var book = await _context.Books.FindAsync(bookId);
                book.UserRatings.Add(userRating);

                var user = await _context.Users.FindAsync(userRating.UserId);
                user.UserRatings.Add(userRating);

                await _context.SaveChangesAsync();
            }

            return Ok();
        }

        [Authorize]
        [HttpPost("{bookId}/addtofavourite")]
        public async Task<IActionResult> AddBookToFavourite(long bookId)
        {
            if (!BookExists(bookId))
            {
                return BadRequest();
            }

            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var favouriteBook = await _context.FavouriteBooks
                                                    .FirstOrDefaultAsync(fv => fv.BookId == bookId && fv.Id == userId);
            if (favouriteBook != null)
            {
                return BadRequest("Book already added to favourites");
            }

            favouriteBook = new FavouriteBook
            {
                BookId = bookId,
                Id = userId
            };

            await _context.FavouriteBooks.AddAsync(favouriteBook);
            if (await _context.SaveChangesAsync() > 0)
            {
                return Ok();
            }

            return BadRequest("Failed to add book to favourites");
        }

        private bool BookExists(long id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
}
