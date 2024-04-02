import { IFriend } from './ListFriends';

export interface IListInfoUser {
  user: {
    image: string;
    name: string;
    gender: 'Masculino' | 'Feminino' | 'Prefiro não dizer';
    size: string;
    foreHand: 'Direta' | 'Esquerda';
    backHand: 'Uma mão' | 'Duas mãos';
    lastPlay: Date;
    joined: Date;
    friends: IFriend[];
  };
}
