import CardPost from '@/components/CardPost';
import { PostsExample } from '@/constants/Posts';

export default function PostsList() {
  return (
    <>
      {PostsExample.map((post) => (
        <CardPost key={post.post.title} post={post.post} />
      ))}
    </>
  );
}
