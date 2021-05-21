import React from "react";
import { MusicCard } from "components";
import { Heading } from "components";
import musicQuery from "./response.json";
import dropsQuery from "./response2.json";
import { Flex } from "@chakra-ui/react";

const Balances = () => (
  <>
    <Flex mb={4} flexDirection="column">
      <Heading fontSize={4} mb={2}>
        Your coins
      </Heading>
      <Heading fontSize={2} mb={2}>
        10,0000 SOL
      </Heading>
      <Heading fontSize={2} mb={2}>
        123 ZPP
      </Heading>
    </Flex>
    <Flex flexDirection="column">
      <Heading fontSize={4} mb={2}>
        Your NFT Collections
      </Heading>
    </Flex>
    <Flex flexGrow={1} flexDirection="row" mb={4}>
      {musicQuery.map((musicObject, i) => (
        <MusicCard key={i} {...musicObject} />
      ))}
    </Flex>
    <Flex flexDirection="column">
      <Heading fontSize={4} mb={2}>
        Your NFT Drops
      </Heading>
    </Flex>
    <Flex flexGrow={1} flexDirection="row" mb={4}>
      {dropsQuery.map((musicObject, i) => (
        <MusicCard key={i} {...musicObject} />
      ))}
    </Flex>
  </>
);

export default Balances;
