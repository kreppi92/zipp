import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import {
  MusicCard,
  UserCard,
  Heading,
  UserCardWide,
  Card,
  UserCardSmall,
  UserProfile,
} from "components";
import { calculateCountdownFromNow } from "utils";

import musicQuery from "./response.json";
import biddersQuery from "./bidders.json";

const countdownDate = "2021-07-05 17:00";

const DropDetails = () => {
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => calculateCountdownFromNow(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(calculateCountdownFromNow(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired]);

  return (
    <Flex flexDirection="column">
      {/* <UserCardWide /> */}
      <Flex mb={10} flexDirection="column">
        <Heading fontSize={4} mb={2}>
          Live Auction
        </Heading>
        <HStack>
          <MusicCard {...musicQuery} width={350} height={350} details={false} />
          <Card width={350} height={350}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <Flex mb={2} flexDirection="column" alignItems="center">
                <Text
                  px="3"
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  color="gray.500"
                  mb="3"
                >
                  Highest Bid
                </Text>
                <Heading fontSize={4} mb={2}>
                  250,000 SOL
                </Heading>
              </Flex>
              <Flex mb={2} flexDirection="column" alignItems="center">
                <Text
                  px="3"
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  color="gray.500"
                  mb="3"
                >
                  Auction Ends
                </Text>
                <Heading fontSize={4} mb={2}>
                  {days && `${days}d`} {hours}:{minutes}:{seconds}
                </Heading>
              </Flex>
            </Flex>
            <Button mb={2}>Bid now</Button>
            <Button variant="outline">View leaderboard</Button>
          </Card>
        </HStack>
      </Flex>
      {/* <Flex mb={4} flexDirection="column">
        <Heading fontSize={4} mb={2}>
          Bidding Activity
        </Heading>
        <Flex>
          {biddersQuery.map((bidder) => (
            <UserCard {...bidder} />
          ))}
        </Flex>
      </Flex> */}
      <Flex mb={10} flexDirection="column">
        <Heading fontSize={4} mb={10}>
          Bidding Activity
        </Heading>
        <Flex>
          {biddersQuery.map((bidder) => (
            <UserCardSmall {...bidder} />
          ))}
        </Flex>
      </Flex>

      <Flex mb={4} flexDirection="column">
        <Heading fontSize={4} mb={10}>
          Details
        </Heading>
        <Box maxW="3xl" mb={10}>
          <Text
            px="3"
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gray.500"
            mb="3"
          >
            Created By
          </Text>
          <UserCardWide />
        </Box>
        <Box maxW="3xl" mb={10}>
          <Text
            px="3"
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gray.500"
            mb="3"
          >
            Auction Details
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
        </Box>
        <Box maxW="3xl" mb={10}>
          <Text
            px="3"
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gray.500"
            mb="3"
          >
            About DJ Khaled
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box maxW="3xl" mb={10}>
          <Text
            px="3"
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gray.500"
            mb="3"
          >
            About zipp
          </Text>
          <Text>
            Zipp is a music NFT platform that lets you bid to own your favorite
            artist's music.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DropDetails;
