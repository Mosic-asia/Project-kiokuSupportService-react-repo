import React from 'react';
import styled from 'styled-components';

interface BotSpeechProps {
  text: string;
}

const SpeechBubble = styled.div`
  max-width: 90%;
  font-size: 1.7rem;
  margin-top: 35%;
  margin-bottom: 5%;
  position: relative;
  line-height: 1.5;
  word-break: break-word;
  background: transparent; /* 배경을 투명하게 설정 */

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    border: none;
  }
`;


const BotSpeech: React.FC<BotSpeechProps> = ({ text }) => {
  return <SpeechBubble>{text}</SpeechBubble>;
};

export default BotSpeech;