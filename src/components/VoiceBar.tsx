// VoiceBar.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

interface VoiceBarsProps {
  isSpeaking: boolean;
}

const barAnimation = keyframes`
  0% {
    transform: scaleY(0.4);
    opacity: 0.7;
  }
  20% {
    transform: scaleY(1);
    opacity: 0.9;
  }
  40% {
    transform: scaleY(0.4);
    opacity: 0.7;
  }
  60% {
    transform: scaleY(0.7);
    opacity: 0.8;
  }
  80% {
    transform: scaleY(0.4);
    opacity: 0.7;
  }
  100% {
    transform: scaleY(0.4);
    opacity: 0.7;
  }
`;

const Bar = styled.div`
  width: 6px;
  height: 20px;
  background-color: #007bff;
  border-radius: 3px;
  transform-origin: bottom center;
  animation: ${(props) => (props.isSpeaking ? `${barAnimation} 1.2s infinite alternate` : 'none')};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const VoiceBars: React.FC<VoiceBarsProps> = ({ isSpeaking }) => {
  return (
    <Wrapper>
      <Bar isSpeaking={isSpeaking} style={{ animationDelay: '0s' }} />
      <Bar isSpeaking={isSpeaking} style={{ animationDelay: '0.2s' }} />
      <Bar isSpeaking={isSpeaking} style={{ animationDelay: '0.4s' }} />
      <Bar isSpeaking={isSpeaking} style={{ animationDelay: '0.6s' }} />
      <Bar isSpeaking={isSpeaking} style={{ animationDelay: '0.8s' }} />
    </Wrapper>
  );
};

export default VoiceBars;