import { SidebarMenuHierarchy } from '../components/SidebarMenuList';

export interface ICardActionsItem {
  hierarchy: SidebarMenuHierarchy;
  icon: string;
  title: string;
  onClick: () => void;
}
