import Icon from '@/components/Icon';
import { Button } from '@/components/ui/Button';
import { IButtonsActionItem } from '@/types/components/CardPost/ButtonsActionItem';

export default function ButtonsActionItem({
  icon,
  onClick,
}: IButtonsActionItem) {
  return (
    <Button
      className="max-w-6 flex items-center justify-center bg-transparent border border-border rounded-full shadow-none group transition-all dark:hover:bg-gray-800"
      onClick={onClick}
    >
      <div>
        <Icon
          name={icon}
          className="text-gray-500 group-hover:text-gray-100 group-hover:dark:text-gray-50 transition-all"
        />
      </div>
    </Button>
  );
}
