import React from "react";
import { Heading } from "components";
import { Grid, GridItem, Flex, Input } from "@chakra-ui/react";

const StyledInput = ({ label, placeholder }) => {
  return (
    <Flex mb={3} flexDirection="column">
      <Heading fontSize={1} mb={2}>
        {label}
      </Heading>
      <Input placeholder={placeholder} size="sm" />
    </Flex>
  );
};

const Bidding = () => {
  return (
    <Flex minHeight={400} flexDirection="column">
      <Heading fontSize={2} mb={2}>
        Fill out your form data
      </Heading>
      <Grid templateColumns="repeat(2, auto)">
        <GridItem colSpan={[2, 1]}>
          <StyledInput
            label="Starting bid amount in (SOL)"
            placeholder="Enter starting bid amount"
            size="large"
          />
          <StyledInput
            label="Buyout price in (SOL)"
            placeholder="Enter buyout price"
            size="large"
          />
        </GridItem>
        <GridItem colSpan={[2, 1]}>
          <StyledInput
            label="Drop date"
            placeholder="Enter drop date"
            size="large"
          />
          <StyledInput
            label="Bid end date"
            placeholder="Enter bid date"
            size="large"
          />
        </GridItem>
        <GridItem colSpan={[2, 1]}>
          <StyledInput
            label="Royalty %"
            placeholder="Enter royalty %"
            size="large"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Bidding;
