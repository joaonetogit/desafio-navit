import { Separator } from '@/components/ui/separator';
import { ISidebarContent } from '@/types/components/SidebarContent';

export default function SidebarContent({ children, hasSeparator }: ISidebarContent) {
  return (
    <div>
      <div className="px-4 py-6">{children}</div>
      {hasSeparator && <Separator />}
    </div>
  );
}
