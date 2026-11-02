import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.index': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.store': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.categorias.update.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.categorias.update.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.index': { paramsTuple?: []; params?: {} }
    'catalogo.directores.store': { paramsTuple?: []; params?: {} }
    'catalogo.directores.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.update.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.update.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.index': { paramsTuple?: []; params?: {} }
    'catalogo.peliculas.store': { paramsTuple?: []; params?: {} }
    'catalogo.peliculas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.update.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.update.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.index': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.index': { paramsTuple?: []; params?: {} }
    'catalogo.directores.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.index': { paramsTuple?: []; params?: {} }
    'catalogo.peliculas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.index': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.index': { paramsTuple?: []; params?: {} }
    'catalogo.directores.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.index': { paramsTuple?: []; params?: {} }
    'catalogo.peliculas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'catalogo.categorias.store': { paramsTuple?: []; params?: {} }
    'catalogo.directores.store': { paramsTuple?: []; params?: {} }
    'catalogo.peliculas.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'catalogo.categorias.update.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.update.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.update.put': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'catalogo.categorias.update.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.update.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.update.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'catalogo.categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.directores.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'catalogo.peliculas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}