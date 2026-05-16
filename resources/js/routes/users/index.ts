import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
export const impersonate = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: impersonate.url(args, options),
    method: 'get',
})

impersonate.definition = {
    methods: ["get","head"],
    url: '/impersonate/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
impersonate.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return impersonate.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
impersonate.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: impersonate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
impersonate.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: impersonate.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
const impersonateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: impersonate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
impersonateForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: impersonate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::impersonate
* @see app/Http/Controllers/UsersController.php:88
* @route '/impersonate/{id}'
*/
impersonateForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: impersonate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

impersonate.form = impersonateForm

const users = {
    impersonate: Object.assign(impersonate, impersonate),
}

export default users