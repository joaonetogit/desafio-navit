import useLastTypeGamesItem from '@/hooks/components/useLastTypeGamesItem';
import { ILastTypeGamesItem } from '@/types/components/LastTypeGamesItem';
import ProgressUi from './ProgressUi';

export default function LastTypeGamesItem({
  text,
  won,
  loss,
}: ILastTypeGamesItem) {
  const { progressLoss, progressWon } = useLastTypeGamesItem(won, loss);

  return (
    <div className="flex items-center gap-2">
      <div className="text-right w-16">
        <p className="text-sm text-gray-500">{text}</p>
      </div>
      <div className="flex w-full flex-1 rounded-sm overflow-hidden">
        <ProgressUi progress={progressWon} value={won} type="won" />
        <ProgressUi progress={progressLoss} value={loss} type="loss" />
      </div>
    </div>
  );
}
