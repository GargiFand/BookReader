import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookDetail } from '../../model/book/bookDetail';
import { UserRating } from 'src/app/model/user/user-rating';
import { AuthService } from 'src/app/service/auth.service';
import { BookService } from 'src/app/service/book.service';

import { CommentForPost } from '../../model/comment/comment';
import { CommentService } from '../../service/comment.service';
import { AlertifyService } from '../../service/alertify.service';
import { Book } from 'src/app/model/book/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public isOpen = false;
  public isLoggedIn: boolean;
  public label = 'Update';
  public currentUserRole: string;

  public addCommentMode = false;
  public updateCommentMode = false;
  public currentComment: CommentForPost;
  public isUserLoggedIn = false;
  public loggedUser: string;

  public userRating: UserRating = new UserRating();
  public lastRatingValue: number;
  public hoverIndex: number;
  public ratings: number[] = [1, 2, 3, 4, 5];
  private bookId: number;
  currentBook: BookDetail;

  private favouriteBooks: Book[] = [];
  isAddToFavouriteButtonDisabled = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private bookService: BookService,
    private commentService: CommentService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {

    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDetails();
    this.lastRatingValue = parseInt(localStorage.getItem(this.bookId.toString()), 10);

    this.isUserLoggedIn = this.authService.isLoggedIn();
    if (this.isUserLoggedIn) {
      this.loggedUser = this.authService.decodedToken.unique_name;
    }
    this.currentUserRole = this.authService.getUserRole();
    if (this.isUserLoggedIn) {
      this.getFavouriteBooks();
    }
  }

  getFavouriteBooks() {
    this.authService.getFavouriteBooks(this.authService.decodedToken.nameid)
      .subscribe(data => {
        this.favouriteBooks = data;

        const foundBook = this.favouriteBooks.find(element => element.id === this.bookId);
        if (foundBook !== undefined) {
          this.isAddToFavouriteButtonDisabled = true;
        }
      });
  }

  addToFavourites() {
    this.bookService.addBookToFavourite(this.bookId, this.currentBook).subscribe(res => {
      this.alertify.success('Added to favourites!');
      this.isAddToFavouriteButtonDisabled = true;
    });
  }

  getDetails() {
    this.bookService.getBookDetails(this.bookId).subscribe(
      book => {
        console.log(book);
        this.currentBook = book;
      }
    );
  }

  initializeDeleteBook() {
    this.alertify.confirm(
      'Are you sure you want to delete this book?',
      () => this.bookService.deleteBook(this.bookId).subscribe(
        _ => {
          this.alertify.success('Book successfully deleted');
          this.router.navigateByUrl('book');
        },
        error => {
          this.alertify.error('Cannot delete book!');
        }
      )
    );
  }

  initializeUpdateBook() {
    if (this.isOpen === false) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  reloadData() {
    this.updateCommentMode = false;
    this.isOpen = false;
    this.getDetails();
  }

  sendRating(rating: number) {
    localStorage.setItem(this.bookId.toString(), rating.toString());
    this.lastRatingValue = rating;

    this.userRating.userId = parseInt(this.authService.decodedToken.nameid, 10);
    this.userRating.bookId = this.bookId;
    this.userRating.ratingValue = rating;

    this.bookService.sendBookRating(this.bookId, this.userRating).subscribe(
      _ => {
        this.alertify.success('Rating submitted!');
        this.getDetails();
      }
    );
  }

  commentFormToggle() {
    this.updateCommentMode = false;
    this.addCommentMode = !this.addCommentMode;
  }

  updateCommentFormToggle(comment) {
    this.currentComment = comment;
    this.addCommentMode = false;
    this.updateCommentMode = !this.updateCommentMode;
  }

  addCommentPassChild() {
    this.addCommentMode = false;
  }

  closeFormAtCancel() {
    this.addCommentMode = false;
  }

  closeUpdateFormAtCancel() {
    this.updateCommentMode = false;
  }

  deleteComment(commentId) {
    this.updateCommentMode = false;
    this.alertify.confirm('Are you sure you want to delete this comment?', () => {
      this.commentService.deleteComment(commentId)
        .subscribe
        (
          result => {
            this.alertify.success('Comment successfully deleted!');
            this.getDetails();
          },
          error => this.alertify.error(error)
        );
    });
  }

  constructEmptyArray(n: number): any[] {
    return Array(Math.round(n));
  }

  goBack() {
    this.router.navigateByUrl('/books');
  }
}
