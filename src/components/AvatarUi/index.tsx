import { IAvatarUi } from '@/types/components/AvatarUi';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

export default function AvatarUi({ image, name, className }: IAvatarUi) {
  return (
    <Avatar className={className}>
      <AvatarImage src={image} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}
