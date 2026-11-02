/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

export type { Route, Path } from './schema.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [[0,"api"],[0,"v1"],[0,"auth"],[0,"signup"]],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [[0,"api"],[0,"v1"],[0,"auth"],[0,"login"]],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"profile"]],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"logout"]],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'catalogo.categorias.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/catalogo/categorias',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"categorias"]],
    types: placeholder as Registry['catalogo.categorias.index']['types'],
  },
  'catalogo.categorias.store': {
    methods: ["POST"],
    pattern: '/api/v1/catalogo/categorias',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"categorias"]],
    types: placeholder as Registry['catalogo.categorias.store']['types'],
  },
  'catalogo.categorias.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/catalogo/categorias/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"categorias"],[1,"id"]],
    types: placeholder as Registry['catalogo.categorias.show']['types'],
  },
  'catalogo.categorias.update.put': {
    methods: ["PUT"],
    pattern: '/api/v1/catalogo/categorias/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"categorias"],[1,"id"]],
    types: placeholder as Registry['catalogo.categorias.update.put']['types'],
  },
  'catalogo.categorias.update.patch': {
    methods: ["PATCH"],
    pattern: '/api/v1/catalogo/categorias/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"categorias"],[1,"id"]],
    types: placeholder as Registry['catalogo.categorias.update.patch']['types'],
  },
  'catalogo.categorias.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/catalogo/categorias/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"categorias"],[1,"id"]],
    types: placeholder as Registry['catalogo.categorias.destroy']['types'],
  },
  'catalogo.directores.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/catalogo/directores',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"directores"]],
    types: placeholder as Registry['catalogo.directores.index']['types'],
  },
  'catalogo.directores.store': {
    methods: ["POST"],
    pattern: '/api/v1/catalogo/directores',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"directores"]],
    types: placeholder as Registry['catalogo.directores.store']['types'],
  },
  'catalogo.directores.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/catalogo/directores/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"directores"],[1,"id"]],
    types: placeholder as Registry['catalogo.directores.show']['types'],
  },
  'catalogo.directores.update.put': {
    methods: ["PUT"],
    pattern: '/api/v1/catalogo/directores/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"directores"],[1,"id"]],
    types: placeholder as Registry['catalogo.directores.update.put']['types'],
  },
  'catalogo.directores.update.patch': {
    methods: ["PATCH"],
    pattern: '/api/v1/catalogo/directores/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"directores"],[1,"id"]],
    types: placeholder as Registry['catalogo.directores.update.patch']['types'],
  },
  'catalogo.directores.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/catalogo/directores/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"directores"],[1,"id"]],
    types: placeholder as Registry['catalogo.directores.destroy']['types'],
  },
  'catalogo.peliculas.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/catalogo/peliculas',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"peliculas"]],
    types: placeholder as Registry['catalogo.peliculas.index']['types'],
  },
  'catalogo.peliculas.store': {
    methods: ["POST"],
    pattern: '/api/v1/catalogo/peliculas',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"peliculas"]],
    types: placeholder as Registry['catalogo.peliculas.store']['types'],
  },
  'catalogo.peliculas.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/catalogo/peliculas/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"peliculas"],[1,"id"]],
    types: placeholder as Registry['catalogo.peliculas.show']['types'],
  },
  'catalogo.peliculas.update.put': {
    methods: ["PUT"],
    pattern: '/api/v1/catalogo/peliculas/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"peliculas"],[1,"id"]],
    types: placeholder as Registry['catalogo.peliculas.update.put']['types'],
  },
  'catalogo.peliculas.update.patch': {
    methods: ["PATCH"],
    pattern: '/api/v1/catalogo/peliculas/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"peliculas"],[1,"id"]],
    types: placeholder as Registry['catalogo.peliculas.update.patch']['types'],
  },
  'catalogo.peliculas.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/catalogo/peliculas/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"catalogo"],[0,"peliculas"],[1,"id"]],
    types: placeholder as Registry['catalogo.peliculas.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
