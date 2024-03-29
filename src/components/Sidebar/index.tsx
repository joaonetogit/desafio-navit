import {
  SidebarMenuAdminItems,
  SidebarMenuCompetitions,
  SidebarMenuConfig,
  SidebarMenuOthers,
  SidebarMenuPerformance,
  SidebarMenuPlayMore,
} from '@/constants/SidebarMenu';
import SearchBar from '../SearchBar';
import User from '../User';
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
      <SidebarContent>
        <SidebarMenuList
          hierarchy="admin"
          items={SidebarMenuAdminItems.items}
        />
      </SidebarContent>
      <SidebarContent>
        <SidebarMenuList
          hierarchy="competitions"
          items={SidebarMenuCompetitions.items}
        />
      </SidebarContent>
      <SidebarContent>
        <SidebarMenuList
          hierarchy="playMore"
          items={SidebarMenuPlayMore.items}
        />
      </SidebarContent>
      <SidebarContent>
        <SidebarMenuList
          hierarchy="performance"
          items={SidebarMenuPerformance.items}
        />
      </SidebarContent>
      <SidebarContent>
        <SidebarMenuList
          hierarchy="others"
          items={SidebarMenuOthers.items}
        />
      </SidebarContent>
      <SidebarContent>
        <SidebarMenuList
          hierarchy="config"
          items={SidebarMenuConfig.items}
        />
      </SidebarContent>
    </aside>
  );
}
