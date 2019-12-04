'use strict'

class SessionController {
  async index ({ view }){
    return view.render('login')
  }

  async login ({ request, auth, response }) { 
    const { email, password } = request.all()
    await auth.attempt(email, password)

    response.redirect('/')
  }

  async logout ({ request, auth, response}){
    await auth.logout()

    response.redirect('/')
  }
}

module.exports = SessionController