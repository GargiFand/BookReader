using BooksRevApp.Model;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Validators
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(x => x.Name).Length(3, 30);
            RuleFor(x => x.Username)
                    .NotEmpty()
                    .WithMessage("Username required!");
            RuleFor(x => x.Email).EmailAddress()
                    .WithMessage("A valid e-mail adress is required!");
        }
    }
}
