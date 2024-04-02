import { ICounterLikes } from '@/types/components/CounterLikes';

export default function CounterLikes({ count }: ICounterLikes) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border border-border rounded-full bg-border text-gray-600 text-sm">
      {'+' + count}
    </div>
  );
}
