import { IFriend } from '@/types/components/ListFriends';

import LogoNavit from '/logo-navit.jpeg';

export const usersFriends: IFriend[] = [
  {
    friend: {
      name: 'João Pinheiro',
      status: 'Offline',
    },
  },
  {
    friend: {
      name: 'Jorge Navit',
      status: 'Online',
    },
  },
  {
    friend: {
      name: 'Nara Navit',
      status: 'Online',
    },
  },
  {
    friend: {
      image: LogoNavit,
      name: 'Navit Company',
      status: 'Online',
    },
  },
  {
    friend: {
      name: 'João Pinheiro',
      status: 'Jogando',
    },
  },
  {
    friend: {
      image: LogoNavit,
      name: 'Jorge Navit',
      status: 'Offline',
    },
  },
  {
    friend: {
      image: LogoNavit,
      name: 'Nara Navit',
      status: 'Online',
    },
  },
  {
    friend: {
      name: 'Navit Company',
      status: 'Ausente',
    },
  },
];
