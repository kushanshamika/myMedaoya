import { useColorScheme } from '@/hooks/useColorScheme';
import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type EventFeedCardProps = {
  title: string;
  date: string; // Format: YYYY-MM-DD
};

const EventFeedCard: React.FC<EventFeedCardProps> = ({ title, date }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const dateObj = new Date(date);
  const day = dateObj.getDate().toString();
  const month = dateObj.toLocaleString('default', { month: 'short' }); // 'Jan', 'Feb', etc.

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? '#1c1c1e' : '#f9f9f9',
          borderColor: isDark ? '#333' : '#ddd',
        },
      ]}
    >
      <View style={styles.dateBox}>
        <Text style={[styles.day, { color: isDark ? '#fff' : '#000' }]}>{day}</Text>
        <Text style={[styles.month, { color: isDark ? '#aaa' : '#666' }]}>{month}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    alignItems: 'center',
  },
  dateBox: {
    alignItems: 'center',
    marginRight: 16,
    width: 48,
  },
  day: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 12,
    marginTop: 2,
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default EventFeedCard;
