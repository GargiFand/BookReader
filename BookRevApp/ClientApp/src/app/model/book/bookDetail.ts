import { CommentForPost } from '../comment/comment';

export interface BookDetail {
    id: number;
    title: string;
    author: string;
    year: number;
    description: string;
    earnings: number;
    isElectronicFormat: boolean;
    genre: string;
    rating: number;
    pictureURL: string;
    // comments?: string[];
    userComments?: CommentForPost[];
}
