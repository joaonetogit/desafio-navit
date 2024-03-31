import { IListInfoUser } from '@/types/components/ListInfoUser';

export const UserExample: IListInfoUser = {
  user: {
    gender: 'Masculino',
    size: '1,75m',
    foreHand: 'Direta',
    backHand: 'Duas mãos',
    lastPlay: new Date('2024-03-15'),
    joined: new Date('2023-01-14'),
  },
};
