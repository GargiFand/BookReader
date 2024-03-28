using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Model
{
  public class UserComment
  {
        public long Id { get; set; }
        public User User { get; set; }
        public long UserId { get; set; }
        public Book Book { get; set; }
        public long BookId { get; set; }
        public Comment Comment { get; set; }
        public long CommentId { get; set; }
  }
}
