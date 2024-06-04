import Text from '@/components/Text';
import { cn } from '@/lib/utils';

interface InputWithLabelProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}
export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Text style="small">{label}</Text>
      {children}
    </div>
  );
};
