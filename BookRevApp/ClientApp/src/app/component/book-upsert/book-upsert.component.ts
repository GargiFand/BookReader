import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Book } from 'src/app/model/book/book';
import { BookService } from 'src/app/service/book.service';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-book-upsert',
  templateUrl: './book-upsert.component.html',
  styleUrls: ['./book-upsert.component.css'],
})
export class BookUpsertComponent implements OnInit {
  @Input() public submitLabel: string;
  @Input() public selectedBook: Book;
  @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();

  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.initializeFormControls();
  }

  initializeFormControls() {
    this.bookForm = new FormGroup({
      title: new FormControl(this.selectedBook.title, Validators.required),
      author: new FormControl(this.selectedBook.author, Validators.required),
      year: new FormControl(this.selectedBook.year, [
        Validators.required,
        Validators.min(1900),
      ]),
      description: new FormControl(
        this.selectedBook.description,
        Validators.required
      ),
      earnings: new FormControl(this.selectedBook.earnings),
      isElectronicFormat: new FormControl(this.selectedBook.isElectronicFormat),
      genre: new FormControl(this.selectedBook.genre, Validators.required),
      pictureURL: new FormControl(this.selectedBook.pictureURL, [
        Validators.required,
        Validators.pattern(
          /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/
        ),
      ]),
    });
    this.bookForm.updateValueAndValidity();
  }

  submitBookData() {
    try {
      const book = this.bookForm.value as Book;
      book.id = this.selectedBook.id;

      if (this.submitLabel === 'Add') {
        this.bookService.addBook(book).subscribe(
          (_) => {
            this.onSubmit.emit(this.submitLabel);
            this.alertify.success('Book successfully added');
          },
          (error) => {
            alert(error);
          }
        );
      } else {
        this.bookService.updateBook(book.id, book).subscribe(
          (_) => {
            this.onSubmit.emit(this.submitLabel);
            this.alertify.success('Book successfully updated');
          },
          (error) => {
            alert(error);
          }
        );
      }
    } catch (e) {
      alert(e.message);
    }
  }

  redirectToViewBooks() {
    this.onSubmit.emit('Cancel');
  }
}
