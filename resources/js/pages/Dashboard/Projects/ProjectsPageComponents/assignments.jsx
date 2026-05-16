import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button.tsx';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import InputError from '@/components/input-error.tsx';
import ProjectController from '@/actions/App/Http/Controllers/ProjectController.ts';
import { Separator } from '@/components/ui/separator.tsx';

function getForm(action, auth, project, managers, contractors) {
    return (
        <Form action={action.url} method={action.method} className="space-y-4">
            {/* Destructure directly from the form object here */}
            {({ data, setData, errors, processing }) => (
                <div className="grid grid-cols-2 gap-1">
                    {(auth.user.role_name === 'Moderator' || auth.user.role_name === 'Admin') && (
                        <div className="space-y-2">
                            <Label htmlFor="manager_id">Assign Project Manager</Label>
                            <Select
                                name="manager_id"
                                placeholder={'Select manager'}
                                defaultValue={`${project.manager_id}`}
                            >
                                <SelectTrigger className={'w-50'} placeholder={'Select manager'}>
                                    <SelectValue placeholder={'Select manager'} />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(managers).map(([id, name]) => (
                                        <SelectItem key={id} value={id.toString()}>
                                            {name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={errors?.manager_id} />
                        </div>
                    )}

                    {(auth.user.role_name === 'Project Manager' || auth.user.role_name === 'Admin')  && (
                        <div className="space-y-2">
                            <Label htmlFor="contractor_id">Assign Contractor</Label>
                            <Select name="contractor_id" defaultValue={`${project.contractor_id}`}>
                                <SelectTrigger className={'w-50'}>
                                    <SelectValue placeholder="Select contractor" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(contractors).map(([id, name]) => (
                                        <SelectItem key={id} value={id.toString()}>
                                            {name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={errors?.contractor_id} />
                        </div>
                    )}
                    <Button type="submit" className="col-span-2 mt-4" disabled={processing}>
                        {processing ? 'Saving...' : 'Save Assignments'}
                    </Button>
                </div>
            )}
        </Form>
    );
}

function UserCards({ user }) { // Note the curly braces around user
    if (!user) return null;
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                {user.name?.charAt(0)}
            </div>
            <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-[10px] text-muted-foreground">{user.email}</p>
            </div>
        </div>
    );
}

// 2. Adjust Select in getForm
// When using shadcn/ui Select, use onValueChange to update Inertia state


export default function Assignments({ project, managers, contractors }) {
    const { auth } = usePage().props;
    const action = ProjectController.assignTeam(project.id);

    // Check if user is Admin or Moderator
    const canEdit = ['Admin', 'Moderator', 'Project Manager'].includes(auth.user.role.name);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Project Assignments</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {project.manager && (
                        <li>
                            <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase">
                                Project Manager
                            </p>
                            <UserCards user={project.manager} />
                        </li>
                    )}
                    {project.contractor && (
                        <li>
                            <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase">Contractor</p>
                            <UserCards user={project.contractor} />
                        </li>
                    )}
                </ul>

                <Separator className={"my-3"}/>

                {canEdit && getForm(action, auth, project, managers, contractors)}
            </CardContent>
        </Card>
    );
}
