import CardPost from '../CardPost';
import { CardsActions } from '../CardsActions';
import CreatePost from '../CreatePost';

export default function Posts() {
  return (
    <div className="flex flex-col w-full flex-1 pt-3 space-y-8 max-w-centerContent">
      <CreatePost />
      <CardsActions />
      <CardPost />
    </div>
  );
}
