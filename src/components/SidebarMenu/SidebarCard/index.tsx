import TitleSidebar from '@/components/Sidebar/TitleSidebar';
import { ISidebarCard } from '@/types/components/SidebarCard';

export default function SidebarCard({ label, children }: ISidebarCard) {
  return (
    <div className="space-y-4">
      {label && <TitleSidebar label={label} />}
      {children}
    </div>
  );
}
