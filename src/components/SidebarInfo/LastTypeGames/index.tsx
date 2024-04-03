import { typesLast20GamesPair, typesLast20GamesRanking, typesLast20GamesSimple, typesLast20GamesTourney } from '@/constants/Results';
import LastTypeGamesItem from './LastTypeGamesItem';

export default function LastTypeGames() {
  return (
    <div className="space-y-3">
      <LastTypeGamesItem
        text={typesLast20GamesSimple.text}
        won={typesLast20GamesSimple.won}
        loss={typesLast20GamesSimple.loss}
      />
      <LastTypeGamesItem
        text={typesLast20GamesPair.text}
        won={typesLast20GamesPair.won}
        loss={typesLast20GamesPair.loss}
      />
      <LastTypeGamesItem
        text={typesLast20GamesRanking.text}
        won={typesLast20GamesRanking.won}
        loss={typesLast20GamesRanking.loss}
      />
      <LastTypeGamesItem
        text={typesLast20GamesTourney.text}
        won={typesLast20GamesTourney.won}
        loss={typesLast20GamesTourney.loss}
      />
    </div>
  );
}
