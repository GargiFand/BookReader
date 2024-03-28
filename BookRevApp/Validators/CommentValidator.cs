using BooksRevApp.Model;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Validators
{
    public class CommentValidator :AbstractValidator<Comment>
    {
        public CommentValidator()
        {
            RuleFor(x => x.Text).Length(5, 100);
            RuleFor(x => x.WhenAdded).LessThanOrEqualTo(DateTime.Now);
        }
    }
}
