import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getMovie, type Movie } from '@/services/movies';

const colors = {
  background: '#101114',
  surface: '#1A1C22',
  text: '#F7F7F8',
  muted: '#A7AAB4',
  accent: '#F05A47',
  gold: '#F4B860',
};

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const goToCatalog = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace('/');
  };

  useEffect(() => {
    async function loadMovie() {
      try {
        if (!id) throw new Error('No se recibió el identificador de la película.');
        setMovie(await getMovie(id));
      } catch (requestError) {
        setError(requestError instanceof Error ? requestError.message : 'No se pudo cargar la película.');
      } finally {
        setLoading(false);
      }
    }
    void loadMovie();
  }, [id]);

  if (loading) {
    return <View style={styles.center}><ActivityIndicator color={colors.accent} size="large" /></View>;
  }

  if (!movie || error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>{error ?? 'Película no encontrada'}</Text>
        <Text style={styles.errorText}>{error ? 'Verifica que la API esté activa.' : 'Esta película no está disponible.'}</Text>
        <Pressable onPress={goToCatalog} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Volver a cartelera</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <SafeAreaView edges={['top']} style={styles.safeTop}>
        <Pressable accessibilityLabel="Volver a cartelera" onPress={goToCatalog} style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </Pressable>
      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.heroLetter}>{movie.titulo.charAt(0).toUpperCase()}</Text>
          <Text style={styles.heroTitle}>{movie.titulo}</Text>
        </View>
        <Text style={styles.eyebrow}>DETALLE DE LA FUNCIÓN</Text>
        <Text style={styles.title}>{movie.titulo}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.gold}>{movie.categoria?.categoria ?? 'Película'}</Text>
          <Text style={styles.muted}>{movie.duracion} minutos</Text>
          <Text style={styles.muted}>{movie.director?.director ?? 'Director no disponible'}</Text>
        </View>
        <Text style={styles.synopsis}>{movie.sinopsis ?? 'Sinopsis no disponible.'}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 14 },
  safeTop: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 },
  content: { padding: 20, paddingTop: 80, paddingBottom: 50 },
  backButton: { width: 42, height: 42, borderRadius: 21, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center', marginLeft: 18 },
  backText: { color: '#fff', fontSize: 34, lineHeight: 36, marginTop: -4 },
  hero: { height: 250, borderRadius: 20, padding: 24, justifyContent: 'flex-end', overflow: 'hidden', backgroundColor: '#28334D', marginBottom: 26 },
  heroLetter: { color: '#7185AF', fontSize: 150, fontWeight: '900', position: 'absolute', top: 18, right: 28 },
  heroTitle: { color: '#fff', fontSize: 25, fontWeight: '900', maxWidth: '80%' },
  eyebrow: { color: colors.accent, fontSize: 11, fontWeight: '800', letterSpacing: 1.7 },
  title: { color: colors.text, fontSize: 30, fontWeight: '900', marginTop: 7 },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 12 },
  gold: { color: colors.gold, fontWeight: '700' },
  muted: { color: colors.muted, fontSize: 13 },
  synopsis: { color: colors.muted, fontSize: 15, lineHeight: 23, marginTop: 18 },
  primaryButton: { alignItems: 'center', paddingVertical: 16, borderRadius: 14, backgroundColor: colors.accent, marginTop: 30 },
  primaryButtonText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  errorTitle: { color: colors.text, fontSize: 22, fontWeight: '800', textAlign: 'center' },
  errorText: { color: colors.muted, textAlign: 'center' },
});
