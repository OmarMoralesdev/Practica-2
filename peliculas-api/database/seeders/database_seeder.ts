import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Categoria from '#models/categoria'
import Director from '#models/director'
import Pelicula from '#models/pelicula'

export default class extends BaseSeeder {
  async run() {
    const directors = await Promise.all(
      ['Christopher Nolan', 'Steven Spielberg', 'Greta Gerwig'].map((director) =>
        Director.firstOrCreate({ director })
      )
    )

    const categories = await Promise.all(
      ['Ciencia ficcion', 'Drama', 'Aventura'].map((categoria) =>
        Categoria.firstOrCreate({ categoria })
      )
    )

    await Pelicula.firstOrCreate(
      { titulo: 'Interestelar' },
      {
        idDirector: directors[0].id,
        duracion: 169,
        idCategoria: categories[0].id,
        sinopsis: 'Una mision espacial para encontrar un nuevo hogar para la humanidad.',
      }
    )

    await Pelicula.firstOrCreate(
      { titulo: 'E.T. El extraterrestre' },
      {
        idDirector: directors[1].id,
        duracion: 115,
        idCategoria: categories[2].id,
        sinopsis: 'Un nino ayuda a un extraterrestre a regresar a su planeta.',
      }
    )

    await Pelicula.firstOrCreate(
      { titulo: 'Barbie' },
      {
        idDirector: directors[2].id,
        duracion: 114,
        idCategoria: categories[1].id,
        sinopsis: 'Barbie emprende un viaje de autodescubrimiento fuera de Barbieland.',
      }
    )
  }
}
