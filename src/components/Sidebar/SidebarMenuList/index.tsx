import Icon from '@/components/Icon';
import { IBgIcon, ISidebarMenuItem } from '@/types/components/SidebarMenuList';

export default function SidebarMenuList({
  hierarchy,
  label,
  items,
}: ISidebarMenuItem) {
  const bgIcon: IBgIcon = {
    admin: 'bg-blue-500',
    competitions: 'bg-purple-500',
    playMore: 'bg-green-500',
    performance: 'bg-yellow-500',
    others: 'bg-gray-500',
    config: 'bg-pink-500',
  };

  return (
    <div>
      {label && <h2>{label}</h2>}
      <nav className="space-y-2">
        {items &&
          items.map((item: { label: string; icon: string }) => {
            const bgClass = bgIcon[hierarchy as keyof IBgIcon];
            return (
              <div key={item.label} className="flex items-center space-x-2">
                <div
                  className={`py-1 px-2 flex items-center justify-center rounded-md ${bgClass} text-black dark:text-white`}
                >
                  <Icon name={item.icon} className="text-white" />
                </div>
                <p>{item.label}</p>
              </div>
            );
          })}
      </nav>
    </div>
  );
}
