import { IListInfoUserRow } from '@/types/components/ListInfoUserRow';
import { formatTime } from '@/utils/moment';

export default function ListInfoUserRow({
  title,
  value,
  format,
}: IListInfoUserRow) {
  const isDate = value instanceof Date && format;
  return (
    <div className="flex items-center gap-6">
      <p className="min-w-16 text-sm text-gray-900 text-right dark:text-gray-100">
        {title}
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-50">
        {isDate ? formatTime(value, format) : String(value)}
      </p>
    </div>
  );
}
