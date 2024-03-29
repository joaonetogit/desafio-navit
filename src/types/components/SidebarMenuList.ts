export interface ISidebarMenuItem {
  label: string;
  icon: string;
  to: string;
}

export interface ISidebarMenuList {
  label?: string;
  items: Array<ISidebarMenuItem>;
}
