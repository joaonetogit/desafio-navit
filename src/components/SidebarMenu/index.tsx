import { renderContentSidebar } from '@/constants/SidebarMenu';
import SearchBar from '../SearchBar';
import User from '../User';
import { Separator } from '../ui/Separator';
import SidebarContent from './SidebarContent';
import SidebarMenuList from './SidebarItem';
import LogoNavit from '/logo-navit.jpeg';

export default function SidebarMenu() {
  return (
    <aside className="w-1/5 h-full bg-transparent border-0 border-r-[1px] border-border bg-white dark:bg-inherit">
      <SidebarContent hasSeparator>
        <SearchBar />
      </SidebarContent>
      <SidebarContent hasSeparator>
        <User name="Navit Digital" username="@NavitDigital" image={LogoNavit} />
      </SidebarContent>
      {renderContentSidebar.map(({ hierarchy, items, label }) => (
        <SidebarContent key={hierarchy}>
          <SidebarMenuList hierarchy={hierarchy} items={items} label={label} />
        </SidebarContent>
      ))}
      <Separator />
    </aside>
  );
}
