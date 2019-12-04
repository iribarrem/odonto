'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/paciente', 'UserController.index')
    .middleware('auth') 
Route.get('/professor', 'UserController.index')
    .middleware('auth')
Route.get('/aluno', 'UserController.index')
    .middleware('auth')

Route.get('/paciente/cadastrar', 'UserController.register')
Route.get('/professor/cadastrar', 'UserController.register')
Route.get('/aluno/cadastrar', 'UserController.register')

Route.post('/users', 'UserController.create')
    .middleware('auth')

Route.get('/anamnese/:id', 'AnamneseController.show')

Route.get('/login', 'SessionController.index')
Route.post('/login', 'SessionController.login')
Route.get('/logout', 'SessionController.logout')