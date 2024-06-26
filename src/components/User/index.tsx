import { IUser } from '@/types/components/User';
import AvatarUi from '../AvatarUi';

export default function User({ name, username, image }: IUser) {
  return (
    <div className="flex gap-4 items-center">
      <AvatarUi image={image} name={name} />
      <div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-gray-500">{username}</p>
      </div>
    </div>
  );
}
