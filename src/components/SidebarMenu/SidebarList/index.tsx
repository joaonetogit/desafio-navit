import Icon from '@/components/Icon';
import { IBgIcon, ISidebarMenuItem } from '@/types/components/SidebarMenuList';
import { bgIcon } from '@/utils/bgIcon';

export default function SidebarList({ hierarchy, items }: ISidebarMenuItem) {
  return (
    <nav className="space-y-2">
      {items &&
        items.map((item: { label: string; icon: string }) => {
          const bgClass = bgIcon[hierarchy as keyof IBgIcon];
          return (
            <div key={item.label} className="flex items-center space-x-2">
              <div
                className={`py-1 px-2 flex items-center justify-center rounded-3xl ${bgClass} text-black dark:text-white`}
              >
                <Icon name={item.icon} className="text-white" />
              </div>
              <p className='text-md'>{item.label}</p>
            </div>
          );
        })}
    </nav>
  );
}
