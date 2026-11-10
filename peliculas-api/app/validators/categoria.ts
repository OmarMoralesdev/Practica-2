import vine from '@vinejs/vine'

export const createCategoriaValidator = vine.create({
  categoria: vine.string().trim().minLength(1).maxLength(150),
})
