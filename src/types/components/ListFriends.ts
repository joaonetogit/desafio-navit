export interface IFriend {
  friend: {
    name: string;
    status: string;
    image?: string;
  };
}

export interface IListFriends {
  friends: IFriend[];
}
