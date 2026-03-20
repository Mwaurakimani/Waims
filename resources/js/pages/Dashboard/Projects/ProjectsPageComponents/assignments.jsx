import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button.tsx';
import { Label } from '@/components/ui/label';
import { assignTeam } from '@/wayfinder/App/Http/Controllers/ProjectController.ts';
import { Input } from '@/components/ui/input.tsx';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select.tsx';
import InputError from '@/components/input-error.tsx';

export default function Assignments({ project, managers, contractors }) {
    const action = assignTeam(project.id);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Project Assignments</CardTitle>
            </CardHeader>
            <CardContent>
                <Form
                    action={action.url}
                    method={action.method}
                    className="space-y-4"
                >
                    {/* Destructure directly from the form object here */}
                    {({ data, setData, errors, processing }) => (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="manager_id">
                                    Assign Project Manager
                                </Label>
                                <Select
                                    name="manager_id"
                                    defaultValue={`${project.manager_id}`}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select supervisor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(managers).map(
                                            ([id, name]) => (
                                                <SelectItem
                                                    key={id}
                                                    value={id.toString()}
                                                >
                                                    {name}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors?.manager_id} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contractor_id">
                                    Assign Project Contractor
                                </Label>
                                <Select
                                    name="contractor_id"
                                    defaultValue={`${project.contractor_id}`}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select contractor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(contractors).map(
                                            ([id, name]) => (
                                                <SelectItem
                                                    key={id}
                                                    value={id.toString()}
                                                >
                                                    {name}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors?.contractor_id} />
                            </div>

                            <Button
                                type="submit"
                                className="col-span-2 mt-4"
                                disabled={processing}
                            >
                                {processing ? 'Saving...' : 'Save Assignments'}
                            </Button>
                        </div>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
}

