import React from 'react';
import { ScrollView } from 'react-native';
import FeedCard from '../../components/FeedCard';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <FeedCard
        title="Medaoya Students Win Science Competition"
        description="Our students have excelled at the national science exhibition held in Colombo. Their innovative projects impressed the judges and brought glory to our school."
        imageUrl="https://picsum.photos/640/480" // Replace with real image URL or asset
        date="2025-05-18"
      />
      <FeedCard
        title="New Library Opened"
        description="We have opened a modern library for students with over 1,000 new books and digital learning tools. All are encouraged to visit during school hours."
        imageUrl="https://picsum.photos/640/480"
        date="2025-05-15"
      />
    </ScrollView>
  );
}
