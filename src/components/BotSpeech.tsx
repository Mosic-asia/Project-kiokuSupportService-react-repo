import React from 'react';
import styled from 'styled-components';

interface BotSpeechProps {
  text: string;
}

const SpeechBubble = styled.div`
  max-width: 90%;
  background: #f3f3f3;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 1.7rem;
  margin-top: 20%;
  margin-bottom: 16px;
  position: relative;
  line-height: 1.5;
  word-break: break-word;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #f3f3f3 transparent transparent;
  }
`;

const BotSpeech: React.FC<BotSpeechProps> = ({ text }) => {
  return <SpeechBubble>{text}</SpeechBubble>;
};

export default BotSpeech;