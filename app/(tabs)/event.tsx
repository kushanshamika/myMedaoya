// src/screens/EventScreen.tsx
import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { EventCard } from '../../components/EventCard';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';

export default function EventScreen() {
  const colorScheme = useColorScheme();
  const themeColors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <SafeArea style={{ backgroundColor: themeColors.background }}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={themeColors.background}
      />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <EventCard
          date={new Date(2025, 4, 23)} // May 23, 2025
          title="Science Exhibition"
          colors={themeColors}
        />
        <EventCard
          date={new Date(2025, 5, 15)} // June 15, 2025
          title="Annual Prize Giving Ceremony"
          colors={themeColors}
        />
        <EventCard
          date={new Date(2025, 6, 5)} // July 5, 2025
          title="Prefects' Leadership Workshop"
          colors={themeColors}
        />
      </ScrollView>
    </SafeArea>
  );
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight || 0}px;
`;
