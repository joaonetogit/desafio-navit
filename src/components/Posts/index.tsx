import { CardsActions } from '../CardsActions';
import CreatePost from '../CreatePost';
import PostsList from './PostsList';

export default function Posts() {
  return (
    <div className="flex flex-col w-full flex-1 pt-3 space-y-8 max-w-centerContent">
      <CreatePost />
      <CardsActions />
      <PostsList />
    </div>
  );
}
