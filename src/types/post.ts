import { IUser } from './components/User';

export interface IPost {
  post: {
    postIcon: string;
    userImage: string;
    userName: string;
    imageThumb: string;
    title: string;
    date: Date;
    imagePost: string;
    likes?: IUser[];
  };
}