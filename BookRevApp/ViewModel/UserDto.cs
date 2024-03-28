using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.ViewModel
{
    public class UserDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? LastLogin { get; set; }
        public string Token { get; set; }
    }
}
