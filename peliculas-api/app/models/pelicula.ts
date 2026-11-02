import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { PeliculaSchema } from '#database/schema'
import Categoria from './categoria.js'
import Director from './director.js'

export default class Pelicula extends PeliculaSchema {
  @belongsTo(() => Director, {
    foreignKey: 'idDirector',
  })
  declare director: BelongsTo<typeof Director>

  @belongsTo(() => Categoria, {
    foreignKey: 'idCategoria',
  })
  declare categoria: BelongsTo<typeof Categoria>
}
