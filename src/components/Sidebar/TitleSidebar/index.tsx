import Icon from '@/components/Icon';
import { ITitleSidebar } from '@/types/components/TitleSidebar';

export default function TitleSidebar({ label, primary, icon }: ITitleSidebar) {
  const sizeText = primary ? 'text-xl normal-case' : 'text-md uppercase';
  const hasIcon = icon ? 'flex items-center gap-2' : '';

  return (
    <div className={hasIcon}>
      {icon && <Icon name={icon} />}
      <h4 className={`font-semibold text-gray-600 dark:text-white ${sizeText}`}>
        {label}
      </h4>
    </div>
  );
}
