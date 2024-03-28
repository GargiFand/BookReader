
using BooksRevApp.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksRevApp.DbContexts
{
    public class BooksContext : DbContext
    {
        public BooksContext(DbContextOptions<BooksContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<FavouriteBook> FavouriteBooks { get; set; }
        public DbSet<UserComment> UserComments { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRating> UserRatings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<FavouriteBook>()
               .HasKey(fv => new { fv.Id, fv.BookId });

            modelBuilder.Entity<FavouriteBook>()
                .HasOne(fv => fv.User)
                .WithMany(fv => fv.FavouriteBooks)
                .HasForeignKey(u => u.Id)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FavouriteBook>()
                .HasOne(fv => fv.Book)
                .WithMany(fv => fv.FavouriteBookUsers)
                .HasForeignKey(u => u.BookId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<Comment>().HasQueryFilter(c => c.IsApproved);

        }
    }
}
