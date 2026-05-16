import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/disputes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::index
* @see app/Http/Controllers/DisputeController.php:16
* @route '/dashboard/disputes'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/disputes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::create
* @see app/Http/Controllers/DisputeController.php:111
* @route '/dashboard/disputes/create'
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
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
export const show = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/disputes/{milestone}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
show.url = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { milestone: args }
    }

    if (Array.isArray(args)) {
        args = {
            milestone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        milestone: args.milestone,
    }

    return show.definition.url
            .replace('{milestone}', parsedArgs.milestone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
show.get = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
show.head = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
const showForm = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
showForm.get = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DisputeController::show
* @see app/Http/Controllers/DisputeController.php:58
* @route '/dashboard/disputes/{milestone}'
*/
showForm.head = (args: { milestone: string | number } | [milestone: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\DisputeController::store
* @see app/Http/Controllers/DisputeController.php:35
* @route '/dashboard/disputes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/disputes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DisputeController::store
* @see app/Http/Controllers/DisputeController.php:35
* @route '/dashboard/disputes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DisputeController::store
* @see app/Http/Controllers/DisputeController.php:35
* @route '/dashboard/disputes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DisputeController::store
* @see app/Http/Controllers/DisputeController.php:35
* @route '/dashboard/disputes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DisputeController::store
* @see app/Http/Controllers/DisputeController.php:35
* @route '/dashboard/disputes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\DisputeController::destroy
* @see app/Http/Controllers/DisputeController.php:104
* @route '/dashboard/disputes/{dispute}'
*/
export const destroy = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/disputes/{dispute}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DisputeController::destroy
* @see app/Http/Controllers/DisputeController.php:104
* @route '/dashboard/disputes/{dispute}'
*/
destroy.url = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { dispute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            dispute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        dispute: typeof args.dispute === 'object'
        ? args.dispute.id
        : args.dispute,
    }

    return destroy.definition.url
            .replace('{dispute}', parsedArgs.dispute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DisputeController::destroy
* @see app/Http/Controllers/DisputeController.php:104
* @route '/dashboard/disputes/{dispute}'
*/
destroy.delete = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\DisputeController::destroy
* @see app/Http/Controllers/DisputeController.php:104
* @route '/dashboard/disputes/{dispute}'
*/
const destroyForm = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DisputeController::destroy
* @see app/Http/Controllers/DisputeController.php:104
* @route '/dashboard/disputes/{dispute}'
*/
destroyForm.delete = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DisputeController::updateStatus
* @see app/Http/Controllers/DisputeController.php:76
* @route '/dashboard/disputes/{dispute}/status'
*/
export const updateStatus = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/disputes/{dispute}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\DisputeController::updateStatus
* @see app/Http/Controllers/DisputeController.php:76
* @route '/dashboard/disputes/{dispute}/status'
*/
updateStatus.url = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { dispute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            dispute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        dispute: typeof args.dispute === 'object'
        ? args.dispute.id
        : args.dispute,
    }

    return updateStatus.definition.url
            .replace('{dispute}', parsedArgs.dispute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DisputeController::updateStatus
* @see app/Http/Controllers/DisputeController.php:76
* @route '/dashboard/disputes/{dispute}/status'
*/
updateStatus.patch = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DisputeController::updateStatus
* @see app/Http/Controllers/DisputeController.php:76
* @route '/dashboard/disputes/{dispute}/status'
*/
const updateStatusForm = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DisputeController::updateStatus
* @see app/Http/Controllers/DisputeController.php:76
* @route '/dashboard/disputes/{dispute}/status'
*/
updateStatusForm.patch = (args: { dispute: number | { id: number } } | [dispute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

const disputes = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
    updateStatus: Object.assign(updateStatus, updateStatus),
}

export default disputes