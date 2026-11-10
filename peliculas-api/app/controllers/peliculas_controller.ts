import type { HttpContext } from '@adonisjs/core/http'
import Pelicula from '#models/pelicula'
import { createPeliculaValidator } from '#validators/pelicula'

export default class PeliculasController {
  async index() {
    return Pelicula.query().preload('director').preload('categoria')
  }

  async show({ params }: HttpContext) {
    return Pelicula.query()
      .where('id', params.id)
      .preload('director')
      .preload('categoria')
      .firstOrFail()
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createPeliculaValidator)
    const pelicula = await Pelicula.create(payload)
    return response.created(pelicula)
  }

  async update({ params, request }: HttpContext) {
    const pelicula = await Pelicula.findOrFail(params.id)
    const payload = await request.validateUsing(createPeliculaValidator)
    pelicula.merge(payload)
    await pelicula.save()
    return pelicula
  }

  async destroy({ params, response }: HttpContext) {
    const pelicula = await Pelicula.findOrFail(params.id)
    await pelicula.delete()
    return response.noContent()
  }
}
