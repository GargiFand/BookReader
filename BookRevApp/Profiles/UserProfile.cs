using AutoMapper;
using BooksRevApp.Helpers;
using BooksRevApp.ViewModel;
using BooksRevApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserToCreate, User>()
                .ForMember(
                    dest => dest.Password,
                    opt => opt.MapFrom(src => HashUtils.GetHashString(src.Password))
                    )
                .ForMember(
                    dest => dest.CreateDate,
                    opt => opt.MapFrom(src => DateTime.Now)
                    )
                .ForMember(
                    dest => dest.LastLogin,
                    opt => opt.MapFrom(src => DateTime.Now)
                    );
            CreateMap<User, UserToken>();
            CreateMap<UserToUpdate, User>();
        }
    }
}
