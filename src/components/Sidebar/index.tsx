import { renderContentSidebar } from '@/constants/SidebarMenu';
import SearchBar from '../SearchBar';
import User from '../User';
import { Separator } from '../ui/separator';
import SidebarContent from './SidebarContent';
import SidebarMenuList from './SidebarMenuList';
import LogoNavit from '/logo-navit.jpeg';

export default function Sidebar() {
  return (
    <aside className="w-full h-full max-w-md bg-transparent border-0 border-r-[1px] border-gray-200">
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
