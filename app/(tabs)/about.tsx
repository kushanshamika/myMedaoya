import { useColorScheme } from '@/hooks/useColorScheme';
import { Icon, Text } from '@rneui/themed';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? '#000' : '#fff',
        },
      ]}
    >
      {/* School Crest */}
      <Image
        source={require('@/assets/images/school-crest.png')} // replace with actual crest asset
        style={styles.crest}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Medaoya Vidyalaya</Text>

      {/* Paragraph */}
      <Text style={[styles.description, { color: isDark ? '#aaa' : '#333' }]}>
        Medaoya Vidyalaya is a leading educational institution in our region, committed to excellence in education, discipline, and community development.
      </Text>

      {/* Contact Info */}
      <View style={styles.contactRow}>
        <Icon name="call" type="material" color={isDark ? '#0af' : '#007AFF'} />
        <Text style={[styles.contactText, { color: isDark ? '#fff' : '#000' }]}>+94 77 123 4567</Text>
      </View>
      <View style={styles.contactRow}>
        <Icon name="email" type="material" color={isDark ? '#0af' : '#007AFF'} />
        <Text style={[styles.contactText, { color: isDark ? '#fff' : '#000' }]}>info@medaoya.sch.lk</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  crest: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 6,
  },
  contactText: {
    fontSize: 16,
  },
  fbButton: {
    marginTop: 32,
    alignItems: 'center',
  },
});
