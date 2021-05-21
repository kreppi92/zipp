import React from "react";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { MusicCard, UserCard, Heading } from "components";

import musicQuery from "./response.json";
import biddersQuery from "./bidders.json";

const DropDetails = () => {
  const { id } = useParams();
  return (
    <Flex flexDirection="column">
      Query for id: {id}
      <Flex mb={4} flexDirection="column">
        <Heading fontSize={4} mb={2}>
          Auction Item
        </Heading>
        <MusicCard {...musicQuery} />
      </Flex>
      <Flex mb={4} flexDirection="column">
        <Heading fontSize={4} mb={2}>
          Bidding Activity
        </Heading>
        <Flex>
          {biddersQuery.map((bidder) => (
            <UserCard {...bidder} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DropDetails;
