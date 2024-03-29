import { ISidebarMenuList } from '@/types/components/SidebarMenuList';

export default function SidebarMenuList({ label, items }: ISidebarMenuList) {
  return (
    <div>
      {label && <h2>{label}</h2>}
      <nav>
        {items.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </nav>
    </div>
  );
}
