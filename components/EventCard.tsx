// src/components/EventCard.tsx
import React from 'react';
import styled from 'styled-components/native';

type EventCardProps = {
  date: Date;
  title: string;
  colors: {
    card: string;
    text: string;
    subtext: string;
  };
};

export const EventCard: React.FC<EventCardProps> = ({ date, title, colors }) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // e.g. Jan, Feb

  return (
    <Card style={{ backgroundColor: colors.card }}>
      <DateContainer>
        <Day style={{ color: colors.text }}>{day}</Day>
        <Month style={{ color: colors.subtext }}>{month}</Month>
      </DateContainer>
      <Title style={{ color: colors.text }}>{title}</Title>
    </Card>
  );
};

const Card = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  elevation: 2;
`;

const DateContainer = styled.View`
  width: 60px;
  align-items: center;
  margin-right: 16px;
`;

const Day = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

const Month = styled.Text`
  font-size: 14px;
  margin-top: -4px;
`;

const Title = styled.Text`
  font-size: 16px;
  flex: 1;
  flex-wrap: wrap;
`;
