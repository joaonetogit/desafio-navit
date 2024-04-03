import { IPost } from '@/types/post';

import { Card } from '../ui/Card';
import CardContentUi from './CardContentUi';
import CardFooterUi from './CardFooterUi';
import CardHeaderUi from './CardHeaderUi';
import CardPostDropdownMenu from './CardHeaderUi/CardPostDropdownMenu';

export default function CardPost({ post }: IPost) {
  return (
    <Card className="rounded-sm shadow-none">
      <CardHeaderUi
        date={post.date}
        iconPost={post.postIcon}
        userName={post.userName}
        title={post.title}
      >
        <CardPostDropdownMenu />
      </CardHeaderUi>

      <CardContentUi postImage={post.imagePost} title={post.title} />
      <CardFooterUi
        image={post.userImage}
        username={post.userName}
        imagesLikes={post.likes}
      />
    </Card>
  );
}
