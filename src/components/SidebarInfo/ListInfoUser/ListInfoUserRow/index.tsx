import { IListInfoUserRow } from '@/types/components/ListInfoUserRow';
import { formatTimeMoment } from '@/utils/moment';

export default function ListInfoUserRow({
  title,
  value,
  format = 'joined',
}: IListInfoUserRow) {
  return (
    <div className="flex items-center gap-6">
      <p className="min-w-16 text-sm text-gray-900 text-right">{title}</p>
      {value instanceof Date ? (
        <p className="text-sm text-gray-800">
          {formatTimeMoment(value, format)}
        </p>
      ) : (
        <p className="text-sm text-gray-800">{value}</p>
      )}
    </div>
  );
}
