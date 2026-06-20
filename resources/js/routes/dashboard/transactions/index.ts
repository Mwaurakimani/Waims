import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/transactions/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::exportMethod
* @see app/Http/Controllers/TransactionController.php:140
* @route '/dashboard/transactions/export'
*/
exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportMethod.form = exportMethodForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/transactions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard/transactions/create'
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
* @see \App\Http\Controllers\TransactionController::post
* @see app/Http/Controllers/TransactionController.php:37
* @route '/dashboard/transactions/create'
*/
export const post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

post.definition = {
    methods: ["post"],
    url: '/dashboard/transactions/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TransactionController::post
* @see app/Http/Controllers/TransactionController.php:37
* @route '/dashboard/transactions/create'
*/
post.url = (options?: RouteQueryOptions) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransactionController::post
* @see app/Http/Controllers/TransactionController.php:37
* @route '/dashboard/transactions/create'
*/
post.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TransactionController::post
* @see app/Http/Controllers/TransactionController.php:37
* @route '/dashboard/transactions/create'
*/
const postForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: post.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TransactionController::post
* @see app/Http/Controllers/TransactionController.php:37
* @route '/dashboard/transactions/create'
*/
postForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: post.url(options),
    method: 'post',
})

post.form = postForm

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
export const viewTransaction = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewTransaction.url(args, options),
    method: 'get',
})

viewTransaction.definition = {
    methods: ["get","head"],
    url: '/dashboard/transactions/{transaction}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
viewTransaction.url = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transaction: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transaction: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return viewTransaction.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
viewTransaction.get = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewTransaction.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
viewTransaction.head = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewTransaction.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
const viewTransactionForm = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewTransaction.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
viewTransactionForm.get = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewTransaction.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::viewTransaction
* @see app/Http/Controllers/TransactionController.php:86
* @route '/dashboard/transactions/{transaction}'
*/
viewTransactionForm.head = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewTransaction.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewTransaction.form = viewTransactionForm

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
export const editTransaction = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editTransaction.url(args, options),
    method: 'get',
})

editTransaction.definition = {
    methods: ["get","head"],
    url: '/dashboard/transactions/{transaction}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
editTransaction.url = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transaction: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transaction: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return editTransaction.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
editTransaction.get = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editTransaction.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
editTransaction.head = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editTransaction.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
const editTransactionForm = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editTransaction.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
editTransactionForm.get = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editTransaction.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::editTransaction
* @see app/Http/Controllers/TransactionController.php:114
* @route '/dashboard/transactions/{transaction}/edit'
*/
editTransactionForm.head = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editTransaction.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editTransaction.form = editTransactionForm

/**
* @see \App\Http\Controllers\TransactionController::updateTransaction
* @see app/Http/Controllers/TransactionController.php:124
* @route '/dashboard/transactions/{transaction}/update'
*/
export const updateTransaction = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateTransaction.url(args, options),
    method: 'patch',
})

updateTransaction.definition = {
    methods: ["patch"],
    url: '/dashboard/transactions/{transaction}/update',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TransactionController::updateTransaction
* @see app/Http/Controllers/TransactionController.php:124
* @route '/dashboard/transactions/{transaction}/update'
*/
updateTransaction.url = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transaction: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transaction: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return updateTransaction.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransactionController::updateTransaction
* @see app/Http/Controllers/TransactionController.php:124
* @route '/dashboard/transactions/{transaction}/update'
*/
updateTransaction.patch = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateTransaction.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TransactionController::updateTransaction
* @see app/Http/Controllers/TransactionController.php:124
* @route '/dashboard/transactions/{transaction}/update'
*/
const updateTransactionForm = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTransaction.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TransactionController::updateTransaction
* @see app/Http/Controllers/TransactionController.php:124
* @route '/dashboard/transactions/{transaction}/update'
*/
updateTransactionForm.patch = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTransaction.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateTransaction.form = updateTransactionForm

const transactions = {
    viewTransaction: Object.assign(viewTransaction, viewTransaction),
    editTransaction: Object.assign(editTransaction, editTransaction),
    updateTransaction: Object.assign(updateTransaction, updateTransaction),
}

export default transactions