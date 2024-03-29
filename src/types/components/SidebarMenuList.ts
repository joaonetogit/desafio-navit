export interface ISidebarMenuData {
  label?: string;
  items: ISidebarMenuContentItems[];
}

export interface ISidebarMenuContentItems {
  label: string;
  icon: string;
  to: string;
}

export type SidebarMenuHierarchy =
  | 'admin'
  | 'competitions'
  | 'playMore'
  | 'performance'
  | 'others'
  | 'config';

export interface ISidebarMenuItem extends ISidebarMenuData {
  hierarchy: SidebarMenuHierarchy;
}

export interface IBgIcon {
  admin: string;
  competitions: string;
  playMore: string;
  performance: string;
  others: string;
  config: string;
}
