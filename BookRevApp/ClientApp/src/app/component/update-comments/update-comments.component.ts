import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentService } from '../../service/comment.service';
import { BookDetail } from '../../model/book/bookDetail';
import { AlertifyService } from '../../service/alertify.service';

@Component({
  selector: 'app-update-comments',
  templateUrl: './update-comments.component.html',
  styleUrls: ['./update-comments.component.css']
})

export class UpdateCommentsComponent implements OnInit {
  @Input() comment: any;
  @Input() currentBook: BookDetail;
  @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClose: EventEmitter<any> = new EventEmitter<any>();

  updateCommentForm: FormGroup = new FormGroup({
   text: new FormControl('')
 });

  constructor(private commentService: CommentService,
              private alertify: AlertifyService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeUpdateCommentData();
  }


  initializeUpdateCommentData() {
    this.updateCommentForm = this.fb.group({
      id: [this.comment.commentId],
      text: new FormControl(this.comment.text)
    });
  }

  save() {
    this.commentService.updateComment(this.updateCommentForm.value, this.comment.commentId)
      .subscribe(_ => {
        this.initializeUpdateCommentData();
        this.onSubmit.emit();
      },
      err => {
        this.alertify.error(err);
      });
  }

  cancel() {
    this.onClose.emit();
  }
}

