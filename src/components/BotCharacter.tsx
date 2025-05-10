// BotCharacter.tsx (수정)
import React, { useState } from 'react';
import styled from 'styled-components';
import botImage from '../assets/bot.png';
import VoiceBar from './VoiceBar';
import AudioRecorder from './AudioRecorder';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const Bot = styled.img`
  width: 300px;
  height: auto;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-drag: none;
`;

const VoiceBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 6px;
  transform: translateY(50%);
  cursor: pointer; /* 클릭 가능하도록 커서 변경 */
`;

const BotCharacter: React.FC = () => {
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);

  const handleRecordingStateChange = (isRecording: boolean) => {
    setIsUserSpeaking(isRecording);
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Bot src={botImage} alt="Bot" onContextMenu={handleContextMenu} />
      <VoiceBarWrapper onClick={() => {
        // VoiceBar 클릭 시 AudioRecorder의 녹음 토글 함수를 직접 호출하거나,
        // 상태를 통해 AudioRecorder를 제어할 수 있습니다.
        // 여기서는 간단하게 상태를 전달하는 방식으로 구현합니다.
        setIsUserSpeaking(!isUserSpeaking);
      }}>
        <VoiceBar isSpeaking={isUserSpeaking} />
      </VoiceBarWrapper>
      {/* VoiceBar의 클릭으로 AudioRecorder를 제어하기 위해 상태를 전달하거나, */}
      {/* 부모-자식 컴포넌트 간 통신 방식을 활용해야 합니다. */}
      {/* 여기서는 간단하게 버튼으로 AudioRecorder를 제어하는 이전 방식을 유지하고, */}
      {/* VoiceBar의 시각적 효과만 연결합니다. */}
      <AudioRecorder onRecordingStateChange={handleRecordingStateChange} />
    </Wrapper>
  );
};

export default BotCharacter;