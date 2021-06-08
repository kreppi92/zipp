import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Text, AudioPlayer, Countdown } from "components";
import { Flex } from "@chakra-ui/react";

const HoverCard = styled(Card)`
  transition: 0.2s;
  position: relative;
  bottom: 0px;
  cursor: default;
`;

const OverlayWrapper = styled.div`
  transition: 0.2s;
  opacity: ${(props) => (props.isHovering ? 0.5 : 0)};
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.gradient};
`;

export const MusicCard = ({
  file,
  image,
  shortLink,
  title,
  artistUsername,
  transaction,
  details,
  ...otherProps
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HoverCard
      width={200}
      height={225}
      m={2}
      p={0}
      borderRadius={10}
      overflow="hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...otherProps}
    >
      <Flex
        width="100%"
        height="75%"
        backgroundImage={`url(${image})`}
        backgroundPosition="center"
        backgroundSize="cover"
        overflow="hidden"
        position="relative"
        flexDirection="column"
        flexGrow={1}
      >
        <OverlayWrapper isHovering={isHovering}>
          <Overlay gradient="radial-gradient(ellipse at top right, rgba(63, 211, 184, 0) 30%, rgba(63, 211, 184, 1) 100%)" />
          <Overlay gradient="radial-gradient(ellipse at bottom left, rgba(215, 152, 255, 0) 30%, rgba(215, 152, 255, 1) 100%)" />
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          />
        </OverlayWrapper>
        <Flex
          position="absolute"
          width="100%"
          height="100%"
          flexDirection="column"
        >
          <AudioPlayer audioFile={file} isHovering={isHovering} />
        </Flex>
      </Flex>
      {details && (
        <Flex p={3} flexDirection="column" as={Link} to="/portal/drop/1">
          <Text fontWeight={700}>{artistUsername}</Text>
          <Text fontWeight={300}>{title}</Text>
        </Flex>
      )}
    </HoverCard>
  );
};

MusicCard.defaultProps = {
  details: true,
};
