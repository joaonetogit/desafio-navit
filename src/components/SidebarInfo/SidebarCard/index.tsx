import { ISidebarCard } from '@/types/components/SidebarCard';

export default function SidebarCard({ label, children }: ISidebarCard) {
  return (
    <div className="space-y-4">
      {label && <h2 className="uppercase font-semibold">{label}</h2>}
      {children}
    </div>
  );
}