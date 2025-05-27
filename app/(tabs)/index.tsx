import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { FeedCard } from '../../components/FeedCard';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';


export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const themeColors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={themeColors.background}
      />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <FeedCard
          image={{ uri: 'https://www.medaoyavidyalaya.lk/upload/academics.jpg' }}
          title="Welcome Back to School!"
          description="Medaoya Vidyalaya celebrated the new term with a warm welcome..."
          date="May 20, 2025"
          colors={themeColors}
        />
        <FeedCard
          image={{ uri: 'https://www.medaoyavidyalaya.lk/upload/sports.jpg' }}
          title="Annual Sports Meet"
          description="Our energetic sports meet was filled with enthusiasm and spirit."
          date="April 10, 2025"
          colors={themeColors}
        />
        <FeedCard
          image={{ uri: 'https://www.medaoyavidyalaya.lk/upload/facilities.jpg' }}
          title="New Library Opened"
          description="We have opened a modern library for students with over 1,000 new books and digital learning tools. All are encouraged to visit during school hours."
          date="March 25, 2025"
          colors={themeColors}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
