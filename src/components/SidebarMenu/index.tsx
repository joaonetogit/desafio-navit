import { renderContentSidebar } from '@/constants/SidebarMenu';
import SearchBar from '../SearchBar';
import Sidebar from '../Sidebar';
import User from '../User';
import SidebarContent from './SidebarContent';
import SidebarMenuList from './SidebarItem';
import LogoNavit from '/logo-navit.jpeg';

export default function SidebarMenu() {
  return (
    <Sidebar>
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
    </Sidebar>
  );
}
