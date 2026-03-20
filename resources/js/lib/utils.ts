import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

// resources/js/lib/utils.ts

export function formatDate(dateString: string | null | undefined): string {
    if (!dateString) return 'N/A';

    try {
        const date = new Date(dateString);

        // Check for invalid date
        if (isNaN(date.getTime())) return dateString;

        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(date);
    } catch (e) {
        return dateString;
    }
}

