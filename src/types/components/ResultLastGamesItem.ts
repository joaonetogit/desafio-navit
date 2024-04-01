export interface IResultLastGamesItem {
  type: 'game' | 'walko' | 'withdrawal';
  value: number;
  select: 'won' | 'loss';
}
