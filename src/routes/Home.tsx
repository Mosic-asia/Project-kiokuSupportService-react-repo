import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BotCharacter from '../components/BotCharacter';
import BotSpeech from '../components/BotSpeech';

const HomeWrapper = styled.div`
  padding: 0 16px;
  max-width: 430px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Character = styled.img`
  width: 150px;
  height: auto;
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <BotSpeech text="きょうは〇〇さんと昼ごはんを食べる約束です〜！" />
      <BotCharacter alt="캐릭터" />
    </HomeWrapper>
  );
};

export default Home;