using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Model
{
  public class FavouriteBook
  {
        public long Id { get; set; }
        public long BookId { get; set; }
        public User User { get; set; }
        public Book Book { get; set; }
  }
}
