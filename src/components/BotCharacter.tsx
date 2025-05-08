import React from 'react';
import styled from 'styled-components';
import botImage from '../assets/bot.png'; 
import VoiceBars from './VoiceBar';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const Bot = styled.img`
  width: 300px;
  height: auto;
`;

const VoiceBarWrapper = styled.div`
  position: absolute;
  bottom: 0; /* 캐릭터 아래쪽에 붙게 */
  display: flex;
  gap: 6px;
  transform: translateY(50%); /* 캐릭터보다 살짝 아래로 내려오게 */
`;

const BotCharacter: React.FC = () => {
  return (
    <Wrapper>
      <Bot src={botImage} alt="Bot" />
      <VoiceBarWrapper>
        <VoiceBars />
      </VoiceBarWrapper>
    </Wrapper>
  );
};

export default BotCharacter;