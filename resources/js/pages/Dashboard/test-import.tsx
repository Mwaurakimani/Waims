import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface ButtonMainProps {
    type: 'primary' | 'damaging' | 'warning';
    children: ReactNode;
    onClick?: () => void;
}

function ButtonMain({ type, children, ...props }: ButtonMainProps) {
    // create the tailwind classes and set them to primary damaging an warning
    const primaryClasses =
        'bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all';
    const damagingClasses =
        'bg-red-600 hover:bg-red-700 text-white shadow-md transition-all';
    const warningClasses =
        'bg-amber-500 hover:bg-amber-600 text-black shadow-sm transition-all';

    // create a switch statement to display them based on the type, do not hard code the class name just create vars for them
    let selectedClasses = '';

    switch (type) {
        case 'primary':
            selectedClasses = primaryClasses;
            break;
        case 'damaging':
            selectedClasses = damagingClasses;
            break;
        case 'warning':
            selectedClasses = warningClasses;
            break;
        default:
            selectedClasses = primaryClasses;
    }

    return (
        <Button className={selectedClasses} {...props}>
            {children}
        </Button>
    );
}

export { ButtonMain };
