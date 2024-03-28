using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.ViewModel
{
    public class CommentToApproveDto
    {
        public long Id { get; set; }
        public string Book { get; set; }
        public string Username { get; set; }
        public string Text { get; set; }
        public DateTime WhenAdded { get; set; }

    }
}
