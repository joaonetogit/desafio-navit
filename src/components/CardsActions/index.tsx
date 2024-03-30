import { MenuActionsItems } from '@/constants/MenuActions';
import CardActionsItem from './CardActionsItem';

export function CardsActions() {
  return (
    <div className="w-full">
      <div className="flex w-full overflow-x-auto gap-2 no-scrollbar">
        {MenuActionsItems.map((item, index) => (
          <CardActionsItem
            key={index}
            icon={item.icon}
            title={item.title}
            hierarchy={item.hierarchy}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}
