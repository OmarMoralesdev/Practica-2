import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DirectoreSchema } from '#database/schema'
import Pelicula from './pelicula.js'

export default class Director extends DirectoreSchema {
  static table = 'directores'

  @hasMany(() => Pelicula, {
    foreignKey: 'idDirector',
  })
  declare peliculas: HasMany<typeof Pelicula>
}
