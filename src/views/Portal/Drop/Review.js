import React from "react";
import { Link } from "react-router-dom";
import { Heading, MusicCard } from "components";
import { Button, Flex } from "@chakra-ui/react";

const Review = ({ songDetails, yourNftDrops, setYourNftDrops }) => {
  const handleSubmit = () => {
    setYourNftDrops([...yourNftDrops, songDetails]);
  };

  return (
    <>
      <Heading fontSize={2} mb={2}>
        Review your NFT for submission
      </Heading>
      <Flex justifyContent="center" alignItems="center" minHeight={400}>
        <MusicCard {...songDetails} />
      </Flex>
      <Button
        onClick={handleSubmit}
        to={{ pathname: "/portal/balances", state: { showNotification: true } }}
        as={Link}
      >
        Submit
      </Button>
    </>
  );
};

export default Review;
