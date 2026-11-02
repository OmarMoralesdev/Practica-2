import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { CategoriaSchema } from '#database/schema'
import Pelicula from './pelicula.js'

export default class Categoria extends CategoriaSchema {
  @hasMany(() => Pelicula, {
    foreignKey: 'idCategoria',
  })
  declare peliculas: HasMany<typeof Pelicula>
}
