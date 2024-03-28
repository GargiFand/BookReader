using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Model
{
    public class UserRating
    {
        public long Id { get; set; }
        public User User { get; set; }
        public long UserId { get; set; }
        public Book Book { get; set; }
        public long BookId { get; set; }
        public int RatingValue { get; set; }
    }
}
