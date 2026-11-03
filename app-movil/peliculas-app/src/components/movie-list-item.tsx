import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Movie } from '@/services/movies';

const colors = {
  surface: '#1A1C22',
  text: '#F7F7F8',
  muted: '#A7AAB4',
  gold: '#F4B860',
};

type MovieListItemProps = {
  movie: Movie;
};

export function MovieListItem({ movie }: MovieListItemProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Abrir detalle de ${movie.titulo}`}
      onPress={() => router.push({ pathname: '/movie/[id]', params: { id: String(movie.id) } })}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {movie.titulo}
        </Text>
        <Text style={styles.cardMeta}>
          {movie.categoria?.categoria ?? 'Película'} · {movie.duracion} min
        </Text>
        <Text style={styles.cardLink}>Ver funciones ›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    marginBottom: 12,
  },
  cardInfo: {
    padding: 16,
    gap: 6,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  cardMeta: {
    color: colors.muted,
    fontSize: 12,
  },
  cardLink: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
});
