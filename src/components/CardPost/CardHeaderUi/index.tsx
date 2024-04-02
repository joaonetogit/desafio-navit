import Icon from '@/components/Icon';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { ICardHeaderUi } from '@/types/components/CardPost/CardHeaderUi';
import { formatTime } from '@/utils/moment';

export default function CardHeaderUi({
  children,
  iconPost,
  title,
  userName,
  date,
}: ICardHeaderUi) {
  return (
    <CardHeader className="flex-row items-center gap-4">
      <img className="w-12 h-12 rounded-full border border-border" src={iconPost} />
      <div className="space-y-1">
        <CardTitle className="flex gap-1">
          <p className="text-blue-500">
            <div className="inline-flex items-center">
              <Icon name="Trophy" className="text-blue-500" />
            </div>
            {' ' + title}
          </p>
        </CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <div>{userName}</div>
          {formatTime(date, 'lastPlay')}
        </CardDescription>
      </div>
      {children}
    </CardHeader>
  );
}