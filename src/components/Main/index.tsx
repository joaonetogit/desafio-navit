import { IChildren } from '@/types/children';

export default function Main({ children }: IChildren) {
  return (
    <main className="w-full flex justify-between gap-5 bg-neutral-100 dark:bg-inherit">
      {children}
    </main>
  );
}
