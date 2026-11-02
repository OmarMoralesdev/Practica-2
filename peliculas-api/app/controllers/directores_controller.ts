import type { HttpContext } from '@adonisjs/core/http'
import Director from '#models/director'
import { createDirectorValidator } from '#validators/director'

export default class DirectoresController {
  async index() {
    return Director.query().preload('peliculas')
  }

  async show({ params }: HttpContext) {
    return Director.query().where('id', params.id).preload('peliculas').firstOrFail()
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createDirectorValidator)
    return response.created(await Director.create(payload))
  }

  async update({ params, request }: HttpContext) {
    const director = await Director.findOrFail(params.id)
    director.merge(await request.validateUsing(createDirectorValidator))
    await director.save()
    return director
  }

  async destroy({ params, response }: HttpContext) {
    const director = await Director.findOrFail(params.id)
    await director.delete()
    return response.noContent()
  }
}
