import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/users/create'
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
* @see \App\Http\Controllers\UsersController::post
* @see app/Http/Controllers/UsersController.php:32
* @route '/dashboard/users/create'
*/
export const post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

post.definition = {
    methods: ["post"],
    url: '/dashboard/users/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UsersController::post
* @see app/Http/Controllers/UsersController.php:32
* @route '/dashboard/users/create'
*/
post.url = (options?: RouteQueryOptions) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UsersController::post
* @see app/Http/Controllers/UsersController.php:32
* @route '/dashboard/users/create'
*/
post.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UsersController::post
* @see app/Http/Controllers/UsersController.php:32
* @route '/dashboard/users/create'
*/
const postForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UsersController::post
* @see app/Http/Controllers/UsersController.php:32
* @route '/dashboard/users/create'
*/
postForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: post.url(options),
    method: 'post',
})

post.form = postForm

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
export const viewUser = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewUser.url(args, options),
    method: 'get',
})

viewUser.definition = {
    methods: ["get","head"],
    url: '/dashboard/users/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
viewUser.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return viewUser.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
viewUser.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
viewUser.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewUser.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
const viewUserForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
viewUserForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::viewUser
* @see app/Http/Controllers/UsersController.php:62
* @route '/dashboard/users/{id}'
*/
viewUserForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewUser.form = viewUserForm

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
export const editUser = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editUser.url(args, options),
    method: 'get',
})

editUser.definition = {
    methods: ["get","head"],
    url: '/dashboard/users/{id}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
editUser.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return editUser.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
editUser.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
editUser.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editUser.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
const editUserForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
editUserForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editUser.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::editUser
* @see app/Http/Controllers/UsersController.php:76
* @route '/dashboard/users/{id}/edit'
*/
editUserForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editUser.form = editUserForm

/**
* @see \App\Http\Controllers\UsersController::suspend
* @see app/Http/Controllers/UsersController.php:83
* @route '/dashboard/users/{id}/suspend'
*/
export const suspend = (args: { id: number | { id: number } } | [id: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

suspend.definition = {
    methods: ["patch"],
    url: '/dashboard/users/{id}/suspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\UsersController::suspend
* @see app/Http/Controllers/UsersController.php:83
* @route '/dashboard/users/{id}/suspend'
*/
suspend.url = (args: { id: number | { id: number } } | [id: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { id: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: typeof args.id === 'object'
        ? args.id.id
        : args.id,
    }

    return suspend.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UsersController::suspend
* @see app/Http/Controllers/UsersController.php:83
* @route '/dashboard/users/{id}/suspend'
*/
suspend.patch = (args: { id: number | { id: number } } | [id: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\UsersController::suspend
* @see app/Http/Controllers/UsersController.php:83
* @route '/dashboard/users/{id}/suspend'
*/
const suspendForm = (args: { id: number | { id: number } } | [id: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UsersController::suspend
* @see app/Http/Controllers/UsersController.php:83
* @route '/dashboard/users/{id}/suspend'
*/
suspendForm.patch = (args: { id: number | { id: number } } | [id: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

suspend.form = suspendForm

const users = {
    viewUser: Object.assign(viewUser, viewUser),
    editUser: Object.assign(editUser, editUser),
    suspend: Object.assign(suspend, suspend),
}

export default users