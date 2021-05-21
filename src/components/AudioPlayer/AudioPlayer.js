import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Flex, Box } from "@chakra-ui/react";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const StyledPlayPauseButton = styled.button`
  margin: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 50px;
  color: white;
  outline: none;
  flex-grow: 0;
  transition: opacity 0.2s;
  opacity: ${({ isPlaying, isHovering }) =>
    isPlaying || isHovering ? 0.7 : 0};

  &:hover {
    opacity: 1;
  }
`;

const StyledInput = styled.input`
  opacity: ${({ isPlaying }) => (isPlaying ? 0.7 : 0)};
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: #00ffa3;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #04aa6d;
    cursor: pointer;
  }
`;

const AudioPlayer = ({ audioFile, isHovering }) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioFile));
  const intervalRef = useRef();

  const { duration } = audioRef.current;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        // toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <Flex
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          {isPlaying ? (
            <StyledPlayPauseButton
              type="button"
              onClick={() => setIsPlaying(false)}
              aria-label="Pause"
              isHovering={isHovering}
              isPlaying={isPlaying}
            >
              <FaPauseCircle />
            </StyledPlayPauseButton>
          ) : (
            <StyledPlayPauseButton
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play"
              isHovering={isHovering}
            >
              <FaPlayCircle />
            </StyledPlayPauseButton>
          )}
        </Box>
      </Flex>
      <StyledInput
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        isHovering={isHovering}
        isPlaying={isPlaying}
      />
      {/* <Play handleClick={() => setPlaying(true)} icon={PlayCircleFilled} /> */}
      {/* </div> */}
    </>
  );
};

export default AudioPlayer;
