import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'
import { createCategoriaValidator } from '#validators/categoria'

export default class CategoriasController {
  async index() {
    return Categoria.query().preload('peliculas')
  }

  async show({ params }: HttpContext) {
    return Categoria.query().where('id', params.id).preload('peliculas').firstOrFail()
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCategoriaValidator)
    return response.created(await Categoria.create(payload))
  }

  async update({ params, request }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    categoria.merge(await request.validateUsing(createCategoriaValidator))
    await categoria.save()
    return categoria
  }

  async destroy({ params, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()
    return response.noContent()
  }
}
