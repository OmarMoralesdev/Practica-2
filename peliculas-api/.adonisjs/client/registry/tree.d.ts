/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  catalogo: {
    categorias: {
      index: typeof routes['catalogo.categorias.index']
      store: typeof routes['catalogo.categorias.store']
      show: typeof routes['catalogo.categorias.show']
      update: {
        put: typeof routes['catalogo.categorias.update.put']
        patch: typeof routes['catalogo.categorias.update.patch']
      }
      destroy: typeof routes['catalogo.categorias.destroy']
    }
    directores: {
      index: typeof routes['catalogo.directores.index']
      store: typeof routes['catalogo.directores.store']
      show: typeof routes['catalogo.directores.show']
      update: {
        put: typeof routes['catalogo.directores.update.put']
        patch: typeof routes['catalogo.directores.update.patch']
      }
      destroy: typeof routes['catalogo.directores.destroy']
    }
    peliculas: {
      index: typeof routes['catalogo.peliculas.index']
      store: typeof routes['catalogo.peliculas.store']
      show: typeof routes['catalogo.peliculas.show']
      update: {
        put: typeof routes['catalogo.peliculas.update.put']
        patch: typeof routes['catalogo.peliculas.update.patch']
      }
      destroy: typeof routes['catalogo.peliculas.destroy']
    }
  }
}
