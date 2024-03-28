import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommentForApproval } from '../model/comment/commentForApproval';
import { CommentService } from '../service/comment.service';
import { AlertifyService } from '../service/alertify.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-approve-comments',
  templateUrl: './approve-comments.component.html',
  styleUrls: ['./approve-comments.component.css']
})
export class ApproveCommentsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['username', 'book', 'commentText', 'addedOn', 'operations'];
  dataSource: MatTableDataSource<CommentForApproval>;
  comments: CommentForApproval[];


  constructor(
    private commentService: CommentService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.loadComments();
    document.body.classList.add('book-list-background');
  }

  loadComments() {
    this.commentService.getCommentsForApproval()
    .subscribe(comments => {
      this.comments = comments;
      this.dataSource = new MatTableDataSource<CommentForApproval>(this.comments);
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }

  approveComment(commentId: number) {
    this.commentService.approveComment(commentId).subscribe(() => {
      this.comments.splice(this.comments.findIndex(c => c.id === commentId), 1);
      this.dataSource._updateChangeSubscription();
      this.alertify.success('Comment approved');
    }, error => {
      this.alertify.error(error);
    });
  }

  rejectComment(commentId: number) {
    this.commentService.rejectComment(commentId).subscribe(() => {
      this.comments.splice(this.comments.findIndex(c => c.id === commentId), 1);
      this.dataSource.data = this.comments;
      this.alertify.success('Comment rejected');
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnDestroy() {
    document.body.classList.remove('book-list-background');
  }

}
