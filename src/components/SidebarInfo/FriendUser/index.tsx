import { IFriend } from '@/types/components/ListFriends';
import FriendUserImageText from './FriendUserImage';

export default function FriendUser({ friend }: IFriend) {
  return (
    <div className="w-full flex flex-1 flex-col border border-border rounded-sm">
      <div className="border-0 border-b-[1px] border-border flex flex-1 overflow-hidden">
        {friend.image ? (
          <img
            src={friend.image}
            alt={friend.name}
            className="overflow-hidden rounded-t-sm"
          />
        ) : (
          <FriendUserImageText name={friend.name} />
        )}
      </div>
      <div className="text-center text-xs px-1 py-2 space-y-1">
        <p className="flex text-balance">{friend.name}</p>
        <p className="text-gray-500">{friend.status}</p>
      </div>
    </div>
  );
}
