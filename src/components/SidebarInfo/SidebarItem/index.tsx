import { ISidebarMenuItem } from '@/types/components/SidebarMenuList';
import SidebarCard from '../SidebarCard';
import SidebarList from '../SidebarList';

export default function SidebarMenuItem({
  hierarchy,
  label,
  items,
}: ISidebarMenuItem) {
  return (
    <SidebarCard label={label}>
      <SidebarList hierarchy={hierarchy} items={items} />
    </SidebarCard>
  );
}
