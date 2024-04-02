import AvatarUi from '@/components/AvatarUi';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/Button';
import { CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ICardFooterUi } from '@/types/components/CardFooterUi';
import AvatarGroup from './AvatarGroup';
import ButtonsAction from './ButtonsAction';
import CounterLikes from './CounterLikes';

export default function CardFooterUi({
  image,
  username,
  imagesLikes,
}: ICardFooterUi) {
  return (
    <CardFooter className="flex flex-col w-full p-0">
      <div className="w-full px-6 py-2 flex items-center gap-4 border-t border-border justify-between">
        <ButtonsAction />
        <div className="flex items-center gap-10">
          <AvatarGroup images={imagesLikes} />
          <CounterLikes count={imagesLikes.length} />
        </div>
      </div>
      <div className="w-full bg-gray-100 dark:bg-transparent flex items-center gap-4 px-6 py-4">
        <AvatarUi image={image} name={username} />
        <div className="flex flex-1 items-center gap-2">
          <Input />
          <Button variant="secondary">
            <Icon name="Forward" />
          </Button>
        </div>
      </div>
    </CardFooter>
  );
}
