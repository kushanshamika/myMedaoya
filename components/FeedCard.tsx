import { useColorScheme } from '@/hooks/useColorScheme';
import { Card, Icon, Text } from '@rneui/themed';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type FeedCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
};

const FeedCard: React.FC<FeedCardProps> = ({ title, description, imageUrl, date }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const cardBackground = isDark ? '#1e1e1e' : '#fff';
  const titleColor = isDark ? '#fff' : '#000';
  const descriptionColor = isDark ? '#ccc' : '#444';
  const dateColor = isDark ? '#aaa' : 'gray';
  const borderColor = isDark ? '#333' : '#ddd';

  return (
    <Card
      containerStyle={{
        backgroundColor: cardBackground,
        borderRadius: 12,
        padding: 0,
        overflow: 'hidden',
        borderColor,
        marginBottom: 16,
      }}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <Card.Title style={{ ...styles.title, color: titleColor }}>{title}</Card.Title>
      <Text style={{ ...styles.description, color: descriptionColor }} numberOfLines={3}>
        {description}
      </Text>
      <View style={styles.footer}>
        <Icon name="schedule" type="material" size={16} color={dateColor} />
        <Text style={{ ...styles.date, color: dateColor }}>{date}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: '100%',
  },
  title: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    paddingHorizontal: 12,
  },
  description: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingTop: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  date: {
    fontSize: 13,
  },
});

export default FeedCard;
