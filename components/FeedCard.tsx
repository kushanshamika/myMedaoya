// src/components/FeedCard.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';

type FeedCardProps = {
  image: any;
  title: string;
  description: string;
  date: string;
  colors: {
    card: string;
    text: string;
    subtext: string;
  };
};

export const FeedCard: React.FC<FeedCardProps> = ({ image, title, description, date, colors }) => {
  return (
    <Card style={{ backgroundColor: colors.card }}>
      <HeroImage source={image} resizeMode="cover" />
      <Content>
        <Title style={{ color: colors.text }}>{title}</Title>
        <Description numberOfLines={3} style={{ color: colors.subtext }}>
          {description}
        </Description>
        <Meta>
          <Ionicons name="time-outline" size={16} color={colors.subtext} />
          <DateText style={{ color: colors.subtext }}>{date}</DateText>
        </Meta>
      </Content>
    </Card>
  );
};

const Card = styled.View`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  elevation: 2;
`;

const HeroImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const Content = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-size: 14px;
  margin-bottom: 12px;
`;

const Meta = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  font-size: 12px;
  margin-left: 6px;
`;
