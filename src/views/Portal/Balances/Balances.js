import React from "react";
import { Heading, MusicCard } from "components";
import musicQuery from "./response.json";
import dropsQuery from "./response2.json";
import { Flex, Button, VStack, Image } from "@chakra-ui/react";
import { useWallet } from "contexts";
// import ChartsComponent from "./ChartsComponent";
import bitcoinWallet from "assets/BitcoinWallet.png";

const Balances = () => {
  const { selectedWallet, setSelectedWallet, urlWallet } = useWallet();

  return (
    <>
      {selectedWallet && selectedWallet.connected ? (
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
          {/* <ChartsComponent /> */}
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
      ) : (
        <VStack>
          <Heading fontSize={4} mb={2}>
            You're in! Now connect your wallet!
          </Heading>
          <Image
            src={bitcoinWallet}
            alt="No wallet connected"
            width="300px"
            height="300px"
            opacity="50%"
            my={10}
          />
          <Button onClick={() => setSelectedWallet(urlWallet)}>
            Connect your wallet to continue
          </Button>
        </VStack>
      )}
    </>
  );
};

export default Balances;
