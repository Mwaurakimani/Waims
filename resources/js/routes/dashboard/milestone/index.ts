import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MilestoneController::store
* @see app/Http/Controllers/MilestoneController.php:16
* @route '/dashboard/milestones/project/{project}'
*/
export const store = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/milestones/project/{project}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MilestoneController::store
* @see app/Http/Controllers/MilestoneController.php:16
* @route '/dashboard/milestones/project/{project}'
*/
store.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: args.project,
    }

    return store.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::store
* @see app/Http/Controllers/MilestoneController.php:16
* @route '/dashboard/milestones/project/{project}'
*/
store.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::store
* @see app/Http/Controllers/MilestoneController.php:16
* @route '/dashboard/milestones/project/{project}'
*/
const storeForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::store
* @see app/Http/Controllers/MilestoneController.php:16
* @route '/dashboard/milestones/project/{project}'
*/
storeForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MilestoneController::update
* @see app/Http/Controllers/MilestoneController.php:48
* @route '/dashboard/milestones/{milestone}'
*/
export const update = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/milestones/{milestone}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MilestoneController::update
* @see app/Http/Controllers/MilestoneController.php:48
* @route '/dashboard/milestones/{milestone}'
*/
update.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return update.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::update
* @see app/Http/Controllers/MilestoneController.php:48
* @route '/dashboard/milestones/{milestone}'
*/
update.put = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MilestoneController::update
* @see app/Http/Controllers/MilestoneController.php:48
* @route '/dashboard/milestones/{milestone}'
*/
const updateForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::update
* @see app/Http/Controllers/MilestoneController.php:48
* @route '/dashboard/milestones/{milestone}'
*/
updateForm.put = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\MilestoneController::destroy
* @see app/Http/Controllers/MilestoneController.php:191
* @route '/dashboard/milestones/{milestone}'
*/
export const destroy = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/milestones/{milestone}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MilestoneController::destroy
* @see app/Http/Controllers/MilestoneController.php:191
* @route '/dashboard/milestones/{milestone}'
*/
destroy.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return destroy.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::destroy
* @see app/Http/Controllers/MilestoneController.php:191
* @route '/dashboard/milestones/{milestone}'
*/
destroy.delete = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MilestoneController::destroy
* @see app/Http/Controllers/MilestoneController.php:191
* @route '/dashboard/milestones/{milestone}'
*/
const destroyForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::destroy
* @see app/Http/Controllers/MilestoneController.php:191
* @route '/dashboard/milestones/{milestone}'
*/
destroyForm.delete = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MilestoneController::complete
* @see app/Http/Controllers/MilestoneController.php:65
* @route '/dashboard/milestones/{milestone}/complete'
*/
export const complete = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/dashboard/milestones/{milestone}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MilestoneController::complete
* @see app/Http/Controllers/MilestoneController.php:65
* @route '/dashboard/milestones/{milestone}/complete'
*/
complete.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return complete.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::complete
* @see app/Http/Controllers/MilestoneController.php:65
* @route '/dashboard/milestones/{milestone}/complete'
*/
complete.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::complete
* @see app/Http/Controllers/MilestoneController.php:65
* @route '/dashboard/milestones/{milestone}/complete'
*/
const completeForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::complete
* @see app/Http/Controllers/MilestoneController.php:65
* @route '/dashboard/milestones/{milestone}/complete'
*/
completeForm.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \App\Http\Controllers\MilestoneController::approve
* @see app/Http/Controllers/MilestoneController.php:80
* @route '/dashboard/milestones/{milestone}/approve'
*/
export const approve = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/dashboard/milestones/{milestone}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MilestoneController::approve
* @see app/Http/Controllers/MilestoneController.php:80
* @route '/dashboard/milestones/{milestone}/approve'
*/
approve.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return approve.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::approve
* @see app/Http/Controllers/MilestoneController.php:80
* @route '/dashboard/milestones/{milestone}/approve'
*/
approve.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::approve
* @see app/Http/Controllers/MilestoneController.php:80
* @route '/dashboard/milestones/{milestone}/approve'
*/
const approveForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::approve
* @see app/Http/Controllers/MilestoneController.php:80
* @route '/dashboard/milestones/{milestone}/approve'
*/
approveForm.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Http\Controllers\MilestoneController::reject
* @see app/Http/Controllers/MilestoneController.php:114
* @route '/dashboard/milestones/{milestone}/reject'
*/
export const reject = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/dashboard/milestones/{milestone}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MilestoneController::reject
* @see app/Http/Controllers/MilestoneController.php:114
* @route '/dashboard/milestones/{milestone}/reject'
*/
reject.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return reject.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::reject
* @see app/Http/Controllers/MilestoneController.php:114
* @route '/dashboard/milestones/{milestone}/reject'
*/
reject.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::reject
* @see app/Http/Controllers/MilestoneController.php:114
* @route '/dashboard/milestones/{milestone}/reject'
*/
const rejectForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::reject
* @see app/Http/Controllers/MilestoneController.php:114
* @route '/dashboard/milestones/{milestone}/reject'
*/
rejectForm.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

reject.form = rejectForm

/**
* @see \App\Http\Controllers\MilestoneController::dispute
* @see app/Http/Controllers/MilestoneController.php:131
* @route '/dashboard/milestones/{milestone}/dispute'
*/
export const dispute = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: dispute.url(args, options),
    method: 'post',
})

dispute.definition = {
    methods: ["post"],
    url: '/dashboard/milestones/{milestone}/dispute',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MilestoneController::dispute
* @see app/Http/Controllers/MilestoneController.php:131
* @route '/dashboard/milestones/{milestone}/dispute'
*/
dispute.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return dispute.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::dispute
* @see app/Http/Controllers/MilestoneController.php:131
* @route '/dashboard/milestones/{milestone}/dispute'
*/
dispute.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: dispute.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::dispute
* @see app/Http/Controllers/MilestoneController.php:131
* @route '/dashboard/milestones/{milestone}/dispute'
*/
const disputeForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: dispute.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::dispute
* @see app/Http/Controllers/MilestoneController.php:131
* @route '/dashboard/milestones/{milestone}/dispute'
*/
disputeForm.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: dispute.url(args, options),
    method: 'post',
})

dispute.form = disputeForm

/**
* @see \App\Http\Controllers\MilestoneController::resolve
* @see app/Http/Controllers/MilestoneController.php:149
* @route '/dashboard/milestones/{milestone}/resolve'
*/
export const resolve = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/dashboard/milestones/{milestone}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MilestoneController::resolve
* @see app/Http/Controllers/MilestoneController.php:149
* @route '/dashboard/milestones/{milestone}/resolve'
*/
resolve.url = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { milestone: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: typeof args.milestone === 'object'
        ? args.milestone.id
        : args.milestone,
    }

    return resolve.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MilestoneController::resolve
* @see app/Http/Controllers/MilestoneController.php:149
* @route '/dashboard/milestones/{milestone}/resolve'
*/
resolve.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::resolve
* @see app/Http/Controllers/MilestoneController.php:149
* @route '/dashboard/milestones/{milestone}/resolve'
*/
const resolveForm = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resolve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MilestoneController::resolve
* @see app/Http/Controllers/MilestoneController.php:149
* @route '/dashboard/milestones/{milestone}/resolve'
*/
resolveForm.post = (args: { milestone: number | { id: number } } | [milestone: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resolve.url(args, options),
    method: 'post',
})

resolve.form = resolveForm

const milestone = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    complete: Object.assign(complete, complete),
    approve: Object.assign(approve, approve),
    reject: Object.assign(reject, reject),
    dispute: Object.assign(dispute, dispute),
    resolve: Object.assign(resolve, resolve),
}

export default milestone