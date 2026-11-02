/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    router
      .group(() => {
        router.get('categorias', [controllers.Categorias, 'index'])
        router.post('categorias', [controllers.Categorias, 'store'])
        router.get('categorias/:id', [controllers.Categorias, 'show'])
        router.put('categorias/:id', [controllers.Categorias, 'update']).as('categorias.update.put')
        router
          .patch('categorias/:id', [controllers.Categorias, 'update'])
          .as('categorias.update.patch')
        router.delete('categorias/:id', [controllers.Categorias, 'destroy'])

        router.get('directores', [controllers.Directores, 'index'])
        router.post('directores', [controllers.Directores, 'store'])
        router.get('directores/:id', [controllers.Directores, 'show'])
        router.put('directores/:id', [controllers.Directores, 'update']).as('directores.update.put')
        router
          .patch('directores/:id', [controllers.Directores, 'update'])
          .as('directores.update.patch')
        router.delete('directores/:id', [controllers.Directores, 'destroy'])

        router.get('peliculas', [controllers.Peliculas, 'index'])
        router.post('peliculas', [controllers.Peliculas, 'store'])
        router.get('peliculas/:id', [controllers.Peliculas, 'show'])
        router.put('peliculas/:id', [controllers.Peliculas, 'update']).as('peliculas.update.put')
        router
          .patch('peliculas/:id', [controllers.Peliculas, 'update'])
          .as('peliculas.update.patch')
        router.delete('peliculas/:id', [controllers.Peliculas, 'destroy'])
      })
      .prefix('catalogo')
      .as('catalogo')
  })
  .prefix('/api/v1')
