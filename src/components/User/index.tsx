import { IUser } from '@/types/components/User';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

export default function User({ name, username, image }: IUser) {
  return (
    <div className='flex gap-2 items-center'>
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className='text-xl font-medium'>{name}</h3>
        <p>{username}</p>
      </div>
    </div>
  );
}
