import Icon from '@/components/Icon';
import { ICardActionsItem } from '@/types/components/CardActionsItem';
import { IBgIcon } from '@/types/components/SidebarMenuList';
import { bgIcon } from '@/utils/bgIcon';

export default function CardActionsItem({
  icon,
  hierarchy,
  title,
  onClick,
}: ICardActionsItem) {
  const bgClass = bgIcon[hierarchy as keyof IBgIcon];

  return (
    <button
      type="button"
      className="bg-white dark:bg-transparent min-w-40 p-4 flex flex-1 flex-col items-start text-left justify-between min-h-48 gap-2 h-fill"
      onClick={onClick}
    >
      <div
        className={`${bgClass} flex items-center justify-center rounded-full p-2`}
      >
        <Icon name={icon} color="white" />
      </div>
      <p className="text-md text-gray-500 dark:text-white">{title}</p>
    </button>
  );
}