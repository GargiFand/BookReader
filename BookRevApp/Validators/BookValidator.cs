using BooksRevApp.Model;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Validators
{
    public class BookValidator : AbstractValidator<Book>
    {
        public BookValidator()
        {
            RuleFor(x => x.Title).Length(2, 30);
            RuleFor(x => x.Year).InclusiveBetween(1900, 2100);
            RuleFor(x => x.Description)
                .MaximumLength(300)
                .WithMessage("Max length is 500 char.");
            RuleFor(x => x.PictureURL).NotEmpty();
        }
    }
}
