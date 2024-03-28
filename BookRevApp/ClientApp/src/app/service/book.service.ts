import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../model/book/book';
import { BookDetail } from '../model/book/bookDetail';
import { UserRating } from '../model/user/user-rating';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private backendBooksUrl = environment.apiUrl + '/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.backendBooksUrl);
  }

  getBookDetails(id: number): Observable<BookDetail> {
    return this.http.get<BookDetail>(this.backendBooksUrl + `/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.backendBooksUrl, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(this.backendBooksUrl + `/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.backendBooksUrl + `/${id}`);
  }

  sendBookRating(bookId: number, rating: UserRating): Observable<UserRating> {
    return this.http.post<UserRating>(this.backendBooksUrl + `/${bookId}` + '/ratings', rating);
  }

  getFilteredBooks(searchText: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('searchText', searchText);
    return this.http.get<Book[]>(this.backendBooksUrl, { params: params });
  }

  addBookToFavourite(bookId: number, book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.backendBooksUrl}/${bookId}/addtofavourite`, book);
  }
}
