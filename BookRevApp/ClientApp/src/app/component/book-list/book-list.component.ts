import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Book } from '../../model/book/book';
import { BookService } from '../../service/book.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  public isOpen = false;
  public label: string;
  public book: Book;
  public id: number;
  public allBooks: Book[] = [];

  public searchText: string;

  public isLoggedIn: boolean;
  public currentUserRole: string;

  isFavourites: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private authService: AuthService
  ) {
    document.querySelector('app-nav-menu').setAttribute('style', 'display:block;');
  }

  ngOnInit() {
    document.body.classList.add('book-list-background');
    this.isFavourites = this.activatedRoute.snapshot.url[0].path === 'favourites';
    this.getBooks();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.currentUserRole = this.authService.getUserRole();
  }

  doSearch() {
    this.router.navigate([], {
      queryParams: { searchText: this.searchText }
    });
    this.getBooks();
  }

  getBooks() {
    if (this.searchText) {
      this.bookService.getFilteredBooks(this.searchText).subscribe(
        result => this.allBooks = result
      );
    } else if (this.isFavourites) {
      this.authService.getFavouriteBooks(parseInt(this.authService.decodedToken.nameid, 10)).subscribe(
        books => this.allBooks = books
      );
    } else {
      this.bookService.getBooks().subscribe(
        books => this.allBooks = books
      );
      this.router.navigate(['/books']);
    }
  }

  initializeUpdateBook() {
    this.isOpen = true;
    this.label = 'Update';
    this.book = this.getBookById(this.id);
  }

  reloadData(action: any) {
    this.id = undefined;
    this.isOpen = false;
    if (action !== 'Cancel') {
      this.getBooks();
    }
  }

  getBookById(id: number) {
    return this.allBooks.find(book => book.id === id);
  }

  // Used for Font Awesome icon generation
  constuctEmptyArray(n: number): any[] {
    return Array(Math.round(n));
  }

  ngOnDestroy() {
    document.body.classList.remove('book-list-background');
  }

}
