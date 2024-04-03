import { ILastGames } from '@/types/constants/lastGames';
import { ITypesLast20Games } from '@/types/constants/typesLastGame';

export const typesLast20GamesSimple: ITypesLast20Games = {
  text: 'Simples',
  won: 15,
  loss: 5,
};

export const typesLast20GamesPair: ITypesLast20Games = {
  text: 'Duplas',
  won: 0,
  loss: 0,
};

export const typesLast20GamesRanking: ITypesLast20Games = {
  text: 'Rankings',
  won: 4,
  loss: 1,
};

export const typesLast20GamesTourney: ITypesLast20Games = {
  text: 'Torneios',
  won: 9,
  loss: 4,
};

export const last20GamesWon: ILastGames = {
  game: 18,
  walko: 0,
  withdrawal: 0,
};

export const last20GamesLoss: ILastGames = {
  game: 5,
  walko: 0,
  withdrawal: 0,
};

export const last12Month = [
  {
    name: 'Ago/2023',
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 5,
  },
  {
    name: 'Nov/2023',
    value: 8,
  },
  {
    value: 7,
  },
  {
    value: 6,
  },
  {
    name: 'Feb/2024',
    value: 2,
  },
];
