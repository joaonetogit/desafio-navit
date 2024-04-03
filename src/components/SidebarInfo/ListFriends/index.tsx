import { IListFriends } from '@/types/components/ListFriends';
import FriendUser from '../FriendUser';

export default function ListFriends({ friends }: IListFriends) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {friends.map((friend, index) => (
        <FriendUser key={index} friend={friend.friend} />
      ))}
    </div>
  );
}
