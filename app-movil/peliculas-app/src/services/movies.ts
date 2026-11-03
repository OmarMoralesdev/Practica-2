export type MovieRelation = {
  id?: number;
  director?: string;
  categoria?: string;
};

export type Movie = {
  id: number;
  titulo: string;
  duracion: number;
  sinopsis: string | null;
  director?: MovieRelation | null;
  categoria?: MovieRelation | null;
};

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3333/api/v1';

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(`${API_URL}/catalogo/peliculas`);
  if (!response.ok) {
    throw new Error(`El servidor respondió con ${response.status}.`);
  }
  return (await response.json()) as Movie[];
}

export async function getMovie(id: string): Promise<Movie> {
  const response = await fetch(`${API_URL}/catalogo/peliculas/${id}`);
  if (!response.ok) {
    throw new Error(`El servidor respondió con ${response.status}.`);
  }
  return (await response.json()) as Movie;
}
