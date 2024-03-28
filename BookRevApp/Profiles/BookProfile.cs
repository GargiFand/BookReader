using AutoMapper;
using BooksRevApp.Model;
using BooksRevApp.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Profiles
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookDto>()
                .ForMember(
                    dest => dest.Rating,
                    opt => opt.MapFrom(src => src.UserRatings.Count == 0 ? 0 : Math.Round(src.UserRatings.Average(userRating => userRating.RatingValue), 1))
                    );

            CreateMap<BookDto, Book>();

            CreateMap<Book, BookDetailViewDto>()
                .ForMember(
                    dest => dest.Rating,
                    opt => opt.MapFrom(src => src.UserRatings.Count == 0 ? 0 : Math.Round(src.UserRatings.Average(userRating => userRating.RatingValue), 1))
                    );

            CreateMap<BookToCreateDto, Book>();
        }


    }
}
