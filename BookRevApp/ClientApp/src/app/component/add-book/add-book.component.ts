import { Component, OnInit, OnDestroy } from '@angular/core';

import { Book } from 'src/app/model/book/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {

  public label = 'Add';
  public book = new Book();

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.classList.add('book-list-background');
  }

  reloadData(action: any) {
    this.router.navigate(['books']);
  }

  ngOnDestroy() {
    document.body.classList.remove('book-list-background');
  }

}
