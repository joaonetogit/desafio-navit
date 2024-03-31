import { IUser } from '@/types/components/User';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

export default function User({ name, username, image }: IUser) {
  return (
    <div className="flex gap-4 items-center">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-gray-500">{username}</p>
      </div>
    </div>
  );
}
