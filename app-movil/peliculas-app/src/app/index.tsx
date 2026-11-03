import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CatalogHeader } from '@/components/catalog-header';
import { MovieListItem } from '@/components/movie-list-item';
import { getMovies, type Movie } from '@/services/movies';

const colors = {
  background: '#101114',
  muted: '#A7AAB4',
  accent: '#F05A47',
};

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = useCallback(async (isRefresh = false) => {
    isRefresh ? setRefreshing(true) : setLoading(true);
    try {
      setMovies(await getMovies());
      setError(null);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'No se pudo cargar la cartelera.');
      setMovies([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadMovies();
  }, [loadMovies]);

  const filteredMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return movies;
    return movies.filter((movie) =>
      `${movie.titulo} ${movie.categoria?.categoria ?? ''}`.toLowerCase().includes(normalizedQuery),
    );
  }, [movies, query]);

  return (
    <View style={styles.screen}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <FlatList
          data={filteredMovies}
          renderItem={({ item }) => <MovieListItem movie={item} />}
          keyExtractor={(movie) => String(movie.id)}
          contentContainerStyle={styles.content}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => void loadMovies(true)}
              tintColor={colors.accent}
            />
          }
          ListHeaderComponent={
            <CatalogHeader
              query={query}
              movieCount={filteredMovies.length}
              error={error}
              onQueryChange={setQuery}
            />
          }
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator color={colors.accent} size="large" style={styles.loader} />
            ) : (
              <Text style={styles.empty}>{error ? 'La cartelera está temporalmente vacía.' : 'No hay resultados.'}</Text>
            )
          }
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  safeArea: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  loader: { marginTop: 50 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 40 },
});
