import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/projects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:39
* @route '/dashboard/projects/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ProjectController::post
* @see app/Http/Controllers/ProjectController.php:47
* @route '/dashboard/projects/create'
*/
export const post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

post.definition = {
    methods: ["post"],
    url: '/dashboard/projects/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::post
* @see app/Http/Controllers/ProjectController.php:47
* @route '/dashboard/projects/create'
*/
post.url = (options?: RouteQueryOptions) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::post
* @see app/Http/Controllers/ProjectController.php:47
* @route '/dashboard/projects/create'
*/
post.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::post
* @see app/Http/Controllers/ProjectController.php:47
* @route '/dashboard/projects/create'
*/
const postForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::post
* @see app/Http/Controllers/ProjectController.php:47
* @route '/dashboard/projects/create'
*/
postForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: post.url(options),
    method: 'post',
})

post.form = postForm

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
export const viewProject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewProject.url(args, options),
    method: 'get',
})

viewProject.definition = {
    methods: ["get","head"],
    url: '/dashboard/projects/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
viewProject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return viewProject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
viewProject.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
viewProject.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewProject.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
const viewProjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
viewProjectForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::viewProject
* @see app/Http/Controllers/ProjectController.php:67
* @route '/dashboard/projects/{id}'
*/
viewProjectForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewProject.form = viewProjectForm

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
export const updateProject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updateProject.url(args, options),
    method: 'get',
})

updateProject.definition = {
    methods: ["get","head"],
    url: '/dashboard/projects/{id}/update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
updateProject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return updateProject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
updateProject.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updateProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
updateProject.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: updateProject.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
const updateProjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: updateProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
updateProjectForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: updateProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::updateProject
* @see app/Http/Controllers/ProjectController.php:79
* @route '/dashboard/projects/{id}/update'
*/
updateProjectForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: updateProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

updateProject.form = updateProjectForm

/**
* @see \App\Http\Controllers\ProjectController::editProject
* @see app/Http/Controllers/ProjectController.php:83
* @route '/dashboard/projects/{id}/edit'
*/
export const editProject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: editProject.url(args, options),
    method: 'put',
})

editProject.definition = {
    methods: ["put"],
    url: '/dashboard/projects/{id}/edit',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProjectController::editProject
* @see app/Http/Controllers/ProjectController.php:83
* @route '/dashboard/projects/{id}/edit'
*/
editProject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return editProject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::editProject
* @see app/Http/Controllers/ProjectController.php:83
* @route '/dashboard/projects/{id}/edit'
*/
editProject.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: editProject.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProjectController::editProject
* @see app/Http/Controllers/ProjectController.php:83
* @route '/dashboard/projects/{id}/edit'
*/
const editProjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: editProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::editProject
* @see app/Http/Controllers/ProjectController.php:83
* @route '/dashboard/projects/{id}/edit'
*/
editProjectForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: editProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

editProject.form = editProjectForm

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:81
* @route '/dashboard/projects/{id}/delete'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/projects/{id}/delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:81
* @route '/dashboard/projects/{id}/delete'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:81
* @route '/dashboard/projects/{id}/delete'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:81
* @route '/dashboard/projects/{id}/delete'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:81
* @route '/dashboard/projects/{id}/delete'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\ProjectController::releaseFunds
* @see app/Http/Controllers/ProjectController.php:85
* @route '/dashboard/projects/{id}/releaseFunds'
*/
export const releaseFunds = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: releaseFunds.url(args, options),
    method: 'post',
})

releaseFunds.definition = {
    methods: ["post"],
    url: '/dashboard/projects/{id}/releaseFunds',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::releaseFunds
* @see app/Http/Controllers/ProjectController.php:85
* @route '/dashboard/projects/{id}/releaseFunds'
*/
releaseFunds.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return releaseFunds.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::releaseFunds
* @see app/Http/Controllers/ProjectController.php:85
* @route '/dashboard/projects/{id}/releaseFunds'
*/
releaseFunds.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: releaseFunds.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::releaseFunds
* @see app/Http/Controllers/ProjectController.php:85
* @route '/dashboard/projects/{id}/releaseFunds'
*/
const releaseFundsForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: releaseFunds.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::releaseFunds
* @see app/Http/Controllers/ProjectController.php:85
* @route '/dashboard/projects/{id}/releaseFunds'
*/
releaseFundsForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: releaseFunds.url(args, options),
    method: 'post',
})

releaseFunds.form = releaseFundsForm

/**
* @see \App\Http\Controllers\ProjectController::updateMilestone
* @see app/Http/Controllers/ProjectController.php:109
* @route '/dashboard/projects/{id}/updateMilestone'
*/
export const updateMilestone = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateMilestone.url(args, options),
    method: 'post',
})

updateMilestone.definition = {
    methods: ["post"],
    url: '/dashboard/projects/{id}/updateMilestone',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::updateMilestone
* @see app/Http/Controllers/ProjectController.php:109
* @route '/dashboard/projects/{id}/updateMilestone'
*/
updateMilestone.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return updateMilestone.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::updateMilestone
* @see app/Http/Controllers/ProjectController.php:109
* @route '/dashboard/projects/{id}/updateMilestone'
*/
updateMilestone.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateMilestone.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::updateMilestone
* @see app/Http/Controllers/ProjectController.php:109
* @route '/dashboard/projects/{id}/updateMilestone'
*/
const updateMilestoneForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMilestone.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::updateMilestone
* @see app/Http/Controllers/ProjectController.php:109
* @route '/dashboard/projects/{id}/updateMilestone'
*/
updateMilestoneForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMilestone.url(args, options),
    method: 'post',
})

updateMilestone.form = updateMilestoneForm

/**
* @see \App\Http\Controllers\ProjectController::assignTeam
* @see app/Http/Controllers/ProjectController.php:111
* @route '/dashboard/projects/{id}/assignTeam'
*/
export const assignTeam = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignTeam.url(args, options),
    method: 'post',
})

assignTeam.definition = {
    methods: ["post"],
    url: '/dashboard/projects/{id}/assignTeam',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::assignTeam
* @see app/Http/Controllers/ProjectController.php:111
* @route '/dashboard/projects/{id}/assignTeam'
*/
assignTeam.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return assignTeam.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::assignTeam
* @see app/Http/Controllers/ProjectController.php:111
* @route '/dashboard/projects/{id}/assignTeam'
*/
assignTeam.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignTeam.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::assignTeam
* @see app/Http/Controllers/ProjectController.php:111
* @route '/dashboard/projects/{id}/assignTeam'
*/
const assignTeamForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignTeam.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::assignTeam
* @see app/Http/Controllers/ProjectController.php:111
* @route '/dashboard/projects/{id}/assignTeam'
*/
assignTeamForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignTeam.url(args, options),
    method: 'post',
})

assignTeam.form = assignTeamForm

const project = {
    create: Object.assign(create, create),
    post: Object.assign(post, post),
    viewProject: Object.assign(viewProject, viewProject),
    updateProject: Object.assign(updateProject, updateProject),
    editProject: Object.assign(editProject, editProject),
    destroy: Object.assign(destroy, destroy),
    releaseFunds: Object.assign(releaseFunds, releaseFunds),
    updateMilestone: Object.assign(updateMilestone, updateMilestone),
    assignTeam: Object.assign(assignTeam, assignTeam),
}

export default project