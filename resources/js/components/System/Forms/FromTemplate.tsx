import { Form } from '@inertiajs/react';
import { InputGroup } from '@/components/System/Layouts/InputGroup';
import { cn } from '@/lib/utils';

function renderFields(field: any,errors:any, key: string, data: any) {
    return (
        <InputGroup
            key={key}
            label={field?.label}
            name={field?.name}
            type={field?.type}
            className={cn('block w-75', field?.className)}
            defaultValue={field?.defaultValue ?? data[key] ?? ''}
            placeholder={field?.placeholder}
            options={field?.options}
            errors={errors}
        />
    );
}

export default function FormTemplate({ formData, children, ...props }: any) {
    return (
        <Form {...props}>
            {({ data = { ...formData.data }, processing, errors }: any) => (
                <>
                    {Object.entries(formData.fields).map(([key, field]) => renderFields(field,errors, key, data))}
                    {children}
                </>
            )}
        </Form>
    );
}
