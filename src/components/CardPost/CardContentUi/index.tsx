import { CardContent } from '@/components/ui/Card';
import { ICardContentUi } from '@/types/components/CardPost/CardContentUi';

export default function CardContentUi({ postImage, title }: ICardContentUi) {
  return (
    <CardContent>
      <img
        className="w-full aspect-square max-h-96 object-contain"
        src={postImage}
        alt={title}
      />
    </CardContent>
  );
}
