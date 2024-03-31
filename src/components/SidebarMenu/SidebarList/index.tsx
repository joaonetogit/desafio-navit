import Icon from '@/components/Icon';
import {
  IBgIcon,
  ISidebarMenuContentItems,
  ISidebarMenuItem,
} from '@/types/components/SidebarMenuList';
import { bgIcon } from '@/utils/bgIcon';

export default function SidebarList({ hierarchy, items }: ISidebarMenuItem) {
  return (
    <nav className="space-y-2">
      {items &&
        items.map((item: ISidebarMenuContentItems) => {
          const bgClass = bgIcon[hierarchy as keyof IBgIcon];
          return (
            <button
              type="button"
              key={item.label}
              className="flex items-center space-x-3"
              onClick={() => alert(`Navegação para ${item.label}`)}
            >
              <div
                className={`py-1 px-2 flex items-center justify-center rounded-3xl ${bgClass} text-black dark:text-white`}
              >
                <Icon name={item.icon} className="text-white" />
              </div>
              <p className="text-sm text-left text-gray-600 dark:text-gray-100">
                {item.label}
              </p>
            </button>
          );
        })}
    </nav>
  );
}
