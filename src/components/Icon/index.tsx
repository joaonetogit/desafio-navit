import { IIcon } from '@/types/components/Icon';
import * as LucideIcons from 'lucide-react';
import { ElementType } from 'react';

export default function Icon({ className, name, size = 18, color, strokeWidth }: IIcon) {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as ElementType;

  if (!IconComponent) {
    console.error(`Ícone '${name}' não encontrado`);
    return null;
  }

  return <IconComponent className={className} size={size} color={color} strokeWidth={strokeWidth} />;
}
