using BooksRevApp.Model;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Validators
{
    public class UserRatingValidator : AbstractValidator<UserRating>
    {
        public UserRatingValidator()
        {
            RuleFor(x => x.RatingValue).InclusiveBetween(1, 5);
        }
    }
}
