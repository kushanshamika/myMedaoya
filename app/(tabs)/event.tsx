import React from 'react';
import { ScrollView } from 'react-native';
import EventFeedCard from '../../components/EventFeedCard';

export default function EventsScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <EventFeedCard title="Annual Sports Meet" date="2025-06-18" />
      <EventFeedCard title="Science Day Exhibition" date="2025-07-10" />
      <EventFeedCard title="Environment Awareness Walk" date="2025-05-22" />
    </ScrollView>
  );
}
