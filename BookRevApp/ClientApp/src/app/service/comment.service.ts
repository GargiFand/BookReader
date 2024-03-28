import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentForPost } from '../model/comment/comment';
import { environment } from 'src/environments/environment';
import { CommentForApproval } from '../model/comment/commentForApproval';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  addComment(bookId: number, comment: CommentForPost): Observable<CommentForPost> {
    return this.http.post<CommentForPost>(`${this.baseUrl}/api/books/${bookId}/comments`, comment);
  }

  deleteComment(userCommentId: number): Observable<CommentForPost> {
    return this.http.delete<CommentForPost>(`${this.baseUrl}/api/comments/${userCommentId}`);
  }

  updateComment(comment: CommentForPost, commentId: number): Observable<CommentForPost> {
    return this.http.put<CommentForPost>(`${this.baseUrl}/api/comments/${commentId}`, comment);
  }

  getCommentsForApproval(): Observable<CommentForApproval[]> {
    return this.http.get<CommentForApproval[]>(this.baseUrl + '/api/comments');
  }

  approveComment(commentId: number) {
    return this.http.post(this.baseUrl + '/api/comments/approve/' + commentId, {});
  }

  rejectComment(commentId: number) {
    return this.http.post(this.baseUrl + '/api/comments/reject/' + commentId, {});
  }
}
