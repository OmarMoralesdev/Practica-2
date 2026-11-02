import vine from '@vinejs/vine'

export const createDirectorValidator = vine.create({
  director: vine.string().trim().minLength(1).maxLength(150),
})
