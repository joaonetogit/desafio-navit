import Icon from '@/components/Icon';
import { IResultLastGamesItem } from '@/types/components/ResultLastGamesItem';

export default function ResultLastGamesItem({
  select,
  value,
  iconName,
  text,
}: IResultLastGamesItem) {
  const color = select === 'won' ? 'text-green-600' : 'text-red-600';

  return (
    <div className="flex flex-1 flex-col items-center">
      <div>
        <div className="flex items-center gap-2">
          <Icon name={iconName} className={color} />
          <span className={`${color} font-medium text-lg`}>{value}</span>
        </div>
      </div>
      <div className={`${color} text-xs font-semibold`}>{text}</div>
    </div>
  );
}
