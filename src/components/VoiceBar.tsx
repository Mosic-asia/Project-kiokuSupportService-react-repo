import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.8); }
`;

const BarsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  height: 30px;
  align-items: flex-end;
`;

const Bar = styled.div<{ delay: string; color: string }>`
  width: 8px;
  height: 100%;
  background-color: ${({ color }) => color};
  animation: ${bounce} 1s infinite;
  animation-delay: ${({ delay }) => delay};
  border-radius: 4px;
`;

const VoiceBars: React.FC = () => {
  return (
    <BarsContainer>
      <Bar color="#FF99C8" delay="0s" />
      <Bar color="#FCF6BD" delay="0.2s" />
      <Bar color="#A0CED9" delay="0.4s" />
    </BarsContainer>
  );
};

export default VoiceBars;