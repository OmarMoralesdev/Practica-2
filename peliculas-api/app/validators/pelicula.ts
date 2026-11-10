import vine from '@vinejs/vine'

export const createPeliculaValidator = vine.create({
  titulo: vine.string().trim().minLength(1).maxLength(200),
  idDirector: vine.number().positive().exists({ table: 'directores', column: 'id' }),
  duracion: vine.number().withoutDecimals().positive(),
  idCategoria: vine.number().positive().exists({ table: 'categorias', column: 'id' }),
  sinopsis: vine.string().trim().optional(),
})
