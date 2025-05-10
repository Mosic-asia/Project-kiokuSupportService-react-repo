// AudioRecorder.tsx (새로운 파일)
import React, { useState, useRef, useCallback } from 'react';
import lamejs from 'lamejs';

interface AudioRecorderProps {
  onRecordingStateChange: (isRecording: boolean) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingStateChange }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const startRecording = useCallback(async () => {
    if (!audioStreamRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioStreamRef.current = stream;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;
        mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'audio/webm' });
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };
        mediaRecorderRef.current.onstop = () => {
          setIsRecording(false);
          onRecordingStateChange(false);
          if (audioChunksRef.current.length > 0) {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            encodeToMP3(audioBlob);
            audioChunksRef.current = [];
          }
          if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
            audioStreamRef.current = null;
          }
          if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close();
            audioContextRef.current = null;
          }
        };
        audioChunksRef.current = [];
        mediaRecorderRef.current.start();
        setIsRecording(true);
        onRecordingStateChange(true);
      } catch (error) {
        console.error('오디오 스트림 접근 오류:', error);
      }
    } else if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'inactive') {
      audioChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
      onRecordingStateChange(true);
    }
  }, [onRecordingStateChange]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const encodeToMP3 = useCallback(async (audioBlob: Blob) => {
    try {
      const arrayBuffer = await audioBlob.arrayBuffer();
      let buffer = new Int16Array(arrayBuffer);

      if (arrayBuffer.byteLength % 2 !== 0) {
        const newBuffer = new ArrayBuffer(arrayBuffer.byteLength + 1);
        new Uint8Array(newBuffer).set(new Uint8Array(arrayBuffer));
        buffer = new Int16Array(newBuffer);
      }

      const mp3enc = new lamejs.Mp3Encoder(1, 44100, 128);
      const samples = buffer;
      const blockSize = 576;
      const mp3Data: Uint8Array[] = [];

      for (let i = 0; i < samples.length; i += blockSize) {
        const sampleChunk = samples.subarray(i, i + blockSize);
        const mp3buf = mp3enc.encodeBuffer(Array.from(sampleChunk));
        if (mp3buf.length > 0) {
          mp3Data.push(new Uint8Array(mp3buf));
        }
      }

      const mp3buf = mp3enc.flush();
      if (mp3buf.length > 0) {
        mp3Data.push(new Uint8Array(mp3buf));
      }

      const mp3Blob = new Blob(mp3Data, { type: 'audio/mp3' });
      const url = URL.createObjectURL(mp3Blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'recorded_audio.mp3';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      console.log('MP3 인코딩 완료 및 다운로드 준비');
      console.log('음성 파일이 다운로드되었습니다. 다운로드 폴더를 확인하세요.');
    } catch (error) {
      console.error('MP3 인코딩 오류:', error);
    }
  }, []);

  const toggleRecording = useCallback(() => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  return (
    <div>
      <button onClick={toggleRecording}>
        {isRecording ? '녹음 중지' : '녹음 시작'}
      </button>
    </div>
  );
};

export default AudioRecorder;