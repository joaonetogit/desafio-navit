import { IListInfoUser } from '@/types/components/ListInfoUser';

export const UserExample: IListInfoUser = {
  user: {
    gender: 'Masculino',
    size: '1,75m',
    foreHand: 'Direta',
    backHand: 'Duas mãos',
    lastPlay: new Date('01-03-2024'),
    joined: new Date('01-01-2023'),
  },
};
