'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('last_name').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.date('birthday').notNullable()
      table.integer('cpf').notNullable().unique()
      table.integer('rg').notNullable().unique()
      table.integer('phone').notNullable()
      table.integer('address')
      table.string('position').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
