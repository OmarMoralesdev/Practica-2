import { StyleSheet, Text, TextInput, View } from 'react-native';

type CatalogHeaderProps = {
  query: string;
  movieCount: number;
  error: string | null;
  onQueryChange: (query: string) => void;
};

const colors = {
  text: '#F7F7F8',
  muted: '#A7AAB4',
  accent: '#F05A47',
  surface: '#1A1C22',
};

export function CatalogHeader({
  query,
  movieCount,
  error,
  onQueryChange,
}: CatalogHeaderProps) {
  return (
    <View>
      <Text style={styles.heading}>Cartelera</Text>
      <TextInput
        accessibilityLabel="Buscar una película"
        placeholder="Buscar película o género"
        placeholderTextColor={colors.muted}
        value={query}
        onChangeText={onQueryChange}
        style={styles.search}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>En cartelera</Text>
        <Text style={styles.count}>{movieCount} películas</Text>
      </View>
      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>No se pudo conectar con la API</Text>
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.errorHint}>Desliza hacia abajo para intentar de nuevo.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontSize: 38,
    fontWeight: '800',
    marginTop: 4,
  },
  search: {
    height: 52,
    borderRadius: 14,
    paddingHorizontal: 18,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: 15,
    marginTop: 22,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 16,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  count: {
    color: colors.muted,
    fontSize: 13,
  },
  errorBox: {
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#3A2021',
    marginBottom: 14,
  },
  errorTitle: {
    color: '#FFB1A8',
    fontWeight: '800',
    marginBottom: 5,
  },
  errorText: {
    color: '#FFDAD5',
    fontSize: 12,
  },
  errorHint: {
    color: '#FFB1A8',
    fontSize: 12,
    marginTop: 8,
  },
});
