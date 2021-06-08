import { Carousel, Countdown, MusicCard } from "components";
import { VStack, HStack, Text, Box, Wrap, WrapItem } from "@chakra-ui/react";
import musicQuery from "./response.json";

export const Explore = () => {
  return (
    <VStack>
      <Carousel />
      <Text
        fontFamily="JetBrains Mono"
        fontSize={48}
        color="black"
        textAlign="center"
      >
        Live Auctions
      </Text>
      <Wrap>
        {musicQuery.map((musicObject, i) => {
          const { endDate, highestBid } = musicObject;
          return (
            <WrapItem>
              <VStack
                bg="gray.200"
                pb={4}
                borderRadius={5}
                _hover={{ bg: "gray.100" }}
                transition=".3s"
              >
                <MusicCard key={i} {...musicObject} />
                <Text
                  px="3"
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  color="gray.500"
                  mb="3"
                >
                  Highest bid
                </Text>
                <Text fontSize={18} fontFamily="JetBrains Mono" mb={2}>
                  {highestBid}
                </Text>
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
                <Countdown countdownDate={endDate} />
              </VStack>
            </WrapItem>
          );
        })}
      </Wrap>
    </VStack>
  );
};
