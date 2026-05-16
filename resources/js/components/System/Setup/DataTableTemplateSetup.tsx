import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

export default function DataTableTemplate({
    columns,
    data,
    actions, // Custom dropdown items
    subClassName = 'text-xs text-muted-foreground',
}: any) {
    // 1. Extend columns to automatically add the "Actions" dropdown at the end
    const tableColumns = React.useMemo(
        () => [
            ...columns,
            {
                id: 'actions',
                header: () => <div className="text-right">Actions</div>,
                cell: ({ row }: any) => (
                    <div className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                {/* Render the custom action items passed as props */}
                                {actions ? (
                                    actions(row.original)
                                ) : (
                                    <DropdownMenuItem>No actions defined</DropdownMenuItem>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ),
            },
        ],
        [columns, actions],
    );

    const table = useReactTable({
        data,
        columns: tableColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    const value = cell.getValue();

                                    return (
                                        <TableCell key={cell.id}>
                                            {/* 1. If the user defined a CUSTOM cell in the columns, use it (highest priority) */}
                                            {cell.column.columnDef.cell !== undefined &&
                                            cell.column.id !== cell?.column?.columnDef?.accessorKey ? (
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            ) : /* 2. If the value is an object, run your stacking logic (your intent) */
                                            typeof value === 'object' && value !== null ? (
                                                <div className="flex flex-col">
                                                    {Object.values(value).map((val: any, index: number) => (
                                                        <span
                                                            key={index}
                                                            className={cn(
                                                                index === 0
                                                                    ? 'font-medium text-slate-900'
                                                                    : subClassName,
                                                            )}
                                                        >
                                                            {String(val)}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                /* 3. Otherwise, just render the string/primitive */
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={tableColumns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
