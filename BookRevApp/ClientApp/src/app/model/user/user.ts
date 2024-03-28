export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  creationDate: Date;
  lastLogin: Date;
  userRatings: number[];
  userComments: string[];
  token: string;
}
