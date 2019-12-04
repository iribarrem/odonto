'use strict'

const Anamnese = use('App/Models/Anamnese')
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with anamnese
 */
class AnamneseController {
  /**
   * Show a list of all anamnese.
   * GET anamnese
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ view }) { 
    return view.render('anamnese')
  }

  /**
   * Render a form to be used for creating a new anamnese.
   * GET anamnese/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new anamnese.
   * POST anamnese
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user

    const data = request.only([
      'sexo', 'naturalidade', 'raca', 'queixa', 'antecedentes', 'historia'
    ])

    const anamnese  = await Anamnese.create({...data, user_id:id})
  }

  /**
   * Display a single anamnese.
   * GET anamnese/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const anamnese = await Anamnese.findBy('user_id', params.id)
    const user = await User.findOrFail(params.id)

    return view.render('anamnese', {anamnese: anamnese.toJSON(), user: user.toJSON()})
  }

  /**
   * Render a form to update an existing anamnese.
   * GET anamnese/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update anamnese details.
   * PUT or PATCH anamnese/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a anamnese with id.
   * DELETE anamnese/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AnamneseController
