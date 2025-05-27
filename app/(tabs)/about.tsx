// src/screens/AboutScreen.tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const themeColors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <SafeArea style={{ backgroundColor: themeColors.background }}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={themeColors.background}
      />
      <Container>
        <Crest
          source={require('../../assets/images/crest.png')}
          resizeMode="contain"
        />
        <Title style={{ color: themeColors.text }}>Medaoya Vidyalaya</Title>
        <Description style={{ color: themeColors.subtext }}>
          Medaoya Vidyalaya is a proud rural school dedicated to holistic education and character development. Our students are nurtured with values, creativity, and community spirit.
        </Description>

        <InfoRow>
          <Ionicons name="call-outline" size={20} color={themeColors.subtext} />
          <InfoText style={{ color: themeColors.subtext }}>+94 71 234 5678</InfoText>
        </InfoRow>

        <InfoRow>
          <Ionicons name="mail-outline" size={20} color={themeColors.subtext} />
          <InfoText style={{ color: themeColors.subtext }}>info@medaoya.sch.lk</InfoText>
        </InfoRow>
      </Container>
    </SafeArea>
  );
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight || 0}px;
`;

const Container = styled.ScrollView`
  flex: 1;
  padding: 24px 16px;
`;

const Crest = styled.Image`
  width: 160px;
  height: 160px;
  align-self: center;
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-size: 15px;
  text-align: center;
  line-height: 22px;
  margin-bottom: 24px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  margin-left: 12px;
`;
