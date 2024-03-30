import { SidebarMenuHierarchy } from './SidebarMenuList';

export interface ICardActionsItem {
  icon: string;
  title: string;
  hierarchy: SidebarMenuHierarchy;
  bgIcon?: SidebarMenuHierarchy;
  onClick?: () => void;
}
