import { Separator } from '@/components/ui/Separator';
import { ISidebarInfoContent } from '@/types/components/SidebarInfoContent';

export default function SidebarInfoContent({
  title,
  actionLabel,
  actionTo,
  children,
}: ISidebarInfoContent) {
  const hasAction = actionLabel && actionTo;

  return (
    <div>
      <div className="px-4 py-5">
        {title}
        {hasAction && (
          <a className="text-xs text-blue-400" href={actionTo}>
            {actionLabel}
          </a>
        )}
      </div>
      <Separator />
      <div className="p-4">{children}</div>
    </div>
  );
}
