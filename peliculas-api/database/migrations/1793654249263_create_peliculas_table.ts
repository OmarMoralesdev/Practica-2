import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'peliculas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo', 200).notNullable()
      table
        .integer('id_director')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('directores')
        .onDelete('RESTRICT')
      table.integer('duracion').unsigned().notNullable()
      table
        .integer('id_categoria')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categorias')
        .onDelete('RESTRICT')
      table.text('sinopsis').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}