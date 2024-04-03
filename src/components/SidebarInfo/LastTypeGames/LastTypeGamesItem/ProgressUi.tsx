import { IProgressUi } from '@/types/components/ProgressUi';

export default function ProgressUi({ progress, value, type }: IProgressUi) {
  const progressColor = type == 'won' ? 'bg-green-500' : 'bg-orange-500';
  const alignType = type == 'won' ? 'justify-end' : 'justify-start';

  return (
    <div
      className={`w-full flex items-center ${progressColor} ${alignType} px-1 text-white`}
      style={{ maxWidth: progress }}
    >
      {value}
    </div>
  );
}
