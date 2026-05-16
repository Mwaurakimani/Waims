import TestController from '@/actions/App/Http/Controllers/TestController';
import FormTemplate from '@/components/System/Forms/FromTemplate';
import { Button } from '@/components/ui/button';

export default function FormTemplateSetup() {
    const formData = {
        data: {
            username: 'Peter Mwaura',
            // accountType: 'Admin'
        },
        fields: {
            username: {
                label: 'Username',
                name: 'username',
                type: 'text',
                className: 'inline',
                defaultValue: 'Peter Mwaura',
                placeholder: 'Username',
            },
            accountType: {
                label: 'Account Type',
                name: 'account_name',
                type: 'select',
                className: 'inline',
                // defaultValue: 'Admin',
                placeholder: 'Select Option',
                options: [
                    { label: 'Super Admin', value: 'Super Admin' },
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ],
            },
            email: {
                label: 'Email',
                name: 'email',
                type: 'email',
                className: 'inline',
                placeholder: 'Email',
            },
            password: {
                label: 'Password',
                name: 'password',
                type: 'password',
                className: 'inline',
                placeholder: 'password',
            },
            confirm_password: {
                label: 'Confirm Password',
                name: 'password_confirmation',
                type: 'password',
                className: 'inline',
                placeholder: 'Confirm Password',
            },
            bio: {
                label: 'Confirm Password',
                name: 'bio',
                type: 'textarea',
                className: 'inline',
                placeholder: 'Confirm Password',
            },
        },
    };

    return (
        <>
            <FormTemplate
                action={TestController.testForm()}
                {...TestController.testForm()}
                className={'bg-red-500'}
                formData={formData}
            >
                <div>
                    <Button>Test</Button>
                </div>
            </FormTemplate>
        </>
    );
}
