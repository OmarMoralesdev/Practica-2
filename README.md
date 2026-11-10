# Aplicacion de peliculas

Monorepositorio que contiene la API y la aplicacion movil para consultar un catalogo de peliculas.

## Proyectos

- `peliculas-api/`: API REST desarrollada con AdonisJS y TypeScript. La configuracion de Docker Compose incluye la API y MySQL.
- `app-movil/peliculas-app/`: aplicacion multiplataforma desarrollada con Expo, React Native y TypeScript.

Cada proyecto mantiene su propio `package.json` y sus dependencias. Ejecuta los comandos desde la carpeta correspondiente.

## Requisitos

- Node.js y npm
- Docker Compose para ejecutar la API con su base de datos
- Expo Go o un emulador para ejecutar la aplicacion movil

## Iniciar la API

```bash
cd peliculas-api
cp .env.example .env
npm install
docker compose up --build -d
```

La API queda disponible en `http://localhost:3333`. Para detener los servicios, ejecuta `docker compose down` desde `peliculas-api/`.

## Iniciar la aplicacion movil

En otra terminal, desde la raiz del monorepositorio:

```bash
cd app-movil/peliculas-app
npm install
npx expo start
```

La aplicacion requiere que la API este en ejecucion y que el dispositivo o emulador pueda acceder a su direccion.

## Integrantes

- Diego Francisco Flores Meza
- Victor Isaías Castrejón Rodríguez
- José Ángel Murillo Verastegui
- Hugo Alexis ramirez villareal
- Jesus Omar Morales Valenzuela