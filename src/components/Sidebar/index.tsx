import { IChildren } from "@/types/children";

export default function Sidebar({
  children,
}: IChildren) {
  return (
    <aside className="w-full max-w-sidebar h-full bg-transparent border-0 border-r-[1px] border-l-[1px] border-border bg-white dark:bg-inherit">
      {children}
    </aside>
  );
}
