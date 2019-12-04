'use strict'

const User = use("App/Models/User")

class UserController {
  async index ({request, view}){
    var users = await User.all()

    return view.render('users', {users: users.toJSON(), url: request.url()})
  }

  async register ({ view }){
    return view.render('register')
  }

  async create ({ request, response }) {
    const data = request.only([ "name", 
                                "last_name", 
                                "email", 
                                "password", 
                                "birthday", 
                                "cpf", 
                                "rg",
                                "phone",
                                "address",
                                "position"])

    const user = await User.create(data)
    return response.redirect('/')
  }
}

module.exports = UserController
