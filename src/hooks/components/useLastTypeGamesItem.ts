export default function useLastTypeGamesItem(won: number, loss: number) {
  const total = won + loss;
  const percentageWon = (won / total) * 100;
  const percentageLoss = (loss / total) * 100;

  const progressWon = `${percentageWon}%`;
  const progressLoss = `${percentageLoss}%`;

  return {
    progressWon,
    progressLoss,
  };
}
