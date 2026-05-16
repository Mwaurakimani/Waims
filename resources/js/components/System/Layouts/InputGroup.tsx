import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';

export function InputGroup({
    children,
    className,
    placeholder,
    label,
    type,
    name,
    error,
    defaultValue,
    options,
    subClassName,
    optionClassName,
    ...props
}: any) {

    const renderElement = () => {
        if (children && !type) {
            return children;
        }

        switch (type) {
            case 'select':
                return (
                    <Select name={name} defaultValue={defaultValue}>
                        <SelectTrigger className={cn('w-full', subClassName)}>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className={cn('w-full', optionClassName)}>
                            {options && options.length > 0
                                ? options.map((option: any) => (
                                      <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                      </SelectItem>
                                  ))
                                : children}
                        </SelectContent>
                    </Select>
                );
            case 'textarea':
                return (
                    <Textarea
                        className={cn('w-full', subClassName)}
                        defaultValue={defaultValue}
                        name={name}
                        {...props}
                    />
                );
            case 'text':
            case 'password':
            case 'email':
                return (
                    <Input
                        className={cn('w-full', subClassName)}
                        defaultValue={defaultValue}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        {...props}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={cn('flex w-full flex-col items-start space-y-2', className)}>
            {label && <Label>{label}</Label>}
            {renderElement()}
            {error && error[name] && <InputError message={error[name]} className="text-xs text-red-500" />}
        </div>
    );
}
