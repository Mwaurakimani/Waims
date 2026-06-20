import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import users48860f from './users'
import milestone from './milestone'
import project from './project'
import transactionsBbd80d from './transactions'
import disputes from './disputes'
/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
export const users = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})

users.definition = {
    methods: ["get","head"],
    url: '/dashboard/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
users.url = (options?: RouteQueryOptions) => {
    return users.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
users.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
users.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: users.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
const usersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: users.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
usersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: users.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UsersController::users
* @see app/Http/Controllers/UsersController.php:15
* @route '/dashboard/users'
*/
usersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: users.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

users.form = usersForm

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/dashboard/project',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projects.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projects.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::projects
* @see app/Http/Controllers/ProjectController.php:17
* @route '/dashboard/project'
*/
projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projects.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

projects.form = projectsForm

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
export const transactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ["get","head"],
    url: '/dashboard/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
const transactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
transactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TransactionController::transactions
* @see app/Http/Controllers/TransactionController.php:18
* @route '/dashboard/transactions'
*/
transactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

transactions.form = transactionsForm

const dashboard = {
    users: Object.assign(users, users48860f),
    milestone: Object.assign(milestone, milestone),
    projects: Object.assign(projects, projects),
    project: Object.assign(project, project),
    transactions: Object.assign(transactions, transactionsBbd80d),
    disputes: Object.assign(disputes, disputes),
}

export default dashboard