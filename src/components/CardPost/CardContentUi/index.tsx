import { CardContent } from '@/components/ui/Card';
import { ICardContentUi } from '@/types/components/CardPost/CardContentUi';

export default function CardContentUi({ postImage, title }: ICardContentUi) {
  return (
    <CardContent>
      <img className="w-full" src={postImage} alt={title} />
    </CardContent>
  );
}
