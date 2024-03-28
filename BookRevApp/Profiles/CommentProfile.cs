using AutoMapper;
using BooksRevApp.Model;
using BooksRevApp.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.Profiles
{
    public class CommentProfile : Profile
    {
        public CommentProfile()
        {
            CreateMap<UserComment, CommentDto>()
                 .ForMember(
                    dest => dest.Username,
                    opt => opt.MapFrom(src => src.User.Username))
                .ForMember(
                    dest => dest.Text,
                    opt => opt.MapFrom(src => src.Comment.Text))
                .ForMember(
                    dest => dest.WhenAdded,
                    opt => opt.MapFrom(src => src.Comment.WhenAdded));

            CreateMap<UserComment, CommentToApproveDto>()
                 .ForMember(
                   dest => dest.Id,
                   opt => opt.MapFrom(src => src.CommentId))
                 .ForMember(
                   dest => dest.Book,
                   opt => opt.MapFrom(src => src.Book.Title))
                .ForMember(
                   dest => dest.Username,
                   opt => opt.MapFrom(src => src.User.Username))
               .ForMember(
                   dest => dest.Text,
                   opt => opt.MapFrom(src => src.Comment.Text))
               .ForMember(
                   dest => dest.WhenAdded,
                   opt => opt.MapFrom(src => src.Comment.WhenAdded));

            CreateMap<CommentToCreate, Comment>();

        }

    }
}
