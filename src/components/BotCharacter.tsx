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
  user-select: none; /* 텍스트 선택 방지 (이미지 선택도 방지 효과) */
  -webkit-user-drag: none; /* 드래그 방지 (webkit 기반 브라우저) */
  -khtml-user-drag: none; /* 드래그 방지 (KHTML 기반 브라우저) */
  -moz-user-select: none; /* 텍스트 선택 방지 (Firefox) */
  -o-user-select: none; /* 텍스트 선택 방지 (Opera) */
  user-drag: none; /* 드래그 방지 (표준 속성) */
`;

const VoiceBarWrapper = styled.div`
  position: absolute;
  bottom: 0; /* 캐릭터 아래쪽에 붙게 */
  display: flex;
  gap: 6px;
  transform: translateY(50%); /* 캐릭터보다 살짝 아래로 내려오게 */
`;

const BotCharacter: React.FC = () => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };
  return (
    <Wrapper>
      <Bot
        src={botImage}
        alt="Bot"
        onContextMenu={handleContextMenu}
      />
      <VoiceBarWrapper>
        <VoiceBars />
      </VoiceBarWrapper>
    </Wrapper>
  );
};

export default BotCharacter;