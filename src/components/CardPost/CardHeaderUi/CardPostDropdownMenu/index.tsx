import Icon from '@/components/Icon';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

export default function CardPostDropdownMenu() {
  return (
    <div className="place-items-start">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-2">
            <Icon name="ChevronDown" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-38">
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem className="p-2" value="share">
              Compartilhar
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="p-2" value="report">
              Denunciar
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
