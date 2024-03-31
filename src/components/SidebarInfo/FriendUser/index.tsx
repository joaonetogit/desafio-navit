import { IFriend } from '@/types/components/ListFriends';

export default function FriendUser({ friend }: IFriend) {
  return (
    <div>
      <div>
        {friend.image ? (
          <img src={friend.image} alt={friend.name} />
        ) : (
          friend.name
        )}
      </div>
      <div>
        <p>{friend.name}</p>
        <p>{friend.status}</p>
      </div>
    </div>
  );
}
