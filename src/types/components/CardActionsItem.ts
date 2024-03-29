import { SidebarMenuHierarchy } from './SidebarMenuList';

export interface ICardActionsItem {
  icon: string;
  title: string;
  hierarchy: string;
  bgIcon?: SidebarMenuHierarchy;
  onClick?: () => void;
}
