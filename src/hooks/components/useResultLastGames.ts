export default function useResultLastGames() {
  const getIconName = (key: string) => {
    switch (key) {
      case 'game':
        return 'CircleCheck';
      case 'walko':
        return 'UserRoundX';
      case 'withdrawal':
        return 'Ambulance';
      default:
        return '';
    }
  };

  const getText = (key: string) => {
    switch (key) {
      case 'game':
        return 'Jogado';
      case 'walko':
        return 'W.O.';
      case 'withdrawal':
        return 'Desistência';
      default:
        return '';
    }
  };

  return {
    getIconName,
    getText,
  };
}
