export interface CommentForApproval {
    id: number;
    book: string;
    username: string;
    text: string;
    // recipientId: number;
    whenAdded: string;
}
