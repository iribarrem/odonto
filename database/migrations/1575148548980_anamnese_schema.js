'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnamneseSchema extends Schema {
  up () {
    this.create('anamnese', (table) => {
      table.increments()

      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('sexo')
      table.string('naturalidade')
      table.string('raca')
      table.text('queixa')
      table.text('antecedentes')
      table.text('historia')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('anamnese')
  }
}

module.exports = AnamneseSchema
