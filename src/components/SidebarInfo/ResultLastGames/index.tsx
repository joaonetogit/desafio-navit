import { last20GamesLoss, last20GamesWon } from '@/constants/Results';
import useResultLastGames from '@/hooks/components/useResultLastGames';
import ResultLastGamesItem from './ResultLastGamesItem';

export default function ResultLastGames() {
  const { getIconName, getText } = useResultLastGames();

  const renderLastGamesItems = (games: any, select: string) => {
    return Object.entries(games).map(([key, value]) => (
      <ResultLastGamesItem
        key={key}
        select={select}
        iconName={getIconName(key)}
        text={getText(key)}
        value={Number(value)}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap">
        {renderLastGamesItems(last20GamesWon, 'won')}
      </div>
      <div className="flex flex-wrap">
        {renderLastGamesItems(last20GamesLoss, 'loss')}
      </div>
    </div>
  );
}
