import { IResultLastGamesItem } from '@/types/components/ResultLastGamesItem';

export default function ResultLastGamesItem({
  type,
  select,
  value,
}: IResultLastGamesItem) {
  const color = select === 'won' ? 'green' : 'red';
  const iconType = {
    game: {
      text: 'Jogado',
      icon: 'UserRoundCheck',
    },
    walko: {
      text: 'W.O.',
      icon: 'UserRoundX',
    },
    withdrawal: {
      text: 'W.O.',
      icon: 'Ambulance',
    },
  };

  return (
    <div className={`${color}`}>
      <div>{type}</div>
      <div>{value}</div>
    </div>
  );
}
