using System;
using System.Collections.Generic;
using System.Linq;

using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BooksRevApp.Model
{
    public class User
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? LastLogin { get; set; }
        public string Token { get; set; }
        public List<Book> Books { get; set; }
        public List<UserRating> UserRatings { get; set; }
        public List<UserComment> UserComments { get; set; }
        public string UserRole { get; set; }
        public ICollection<FavouriteBook> FavouriteBooks { get; set; }
  }
}
