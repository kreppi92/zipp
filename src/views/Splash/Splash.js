import { Flex, Image, Box, Heading, Text } from "components";
import zippLogo from "components/assets/zipp-logo-text-black.svg";
import Typed from "react-typed";

const SplashView = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      bg="white"
      alignItems="center"
      justifyContent="center"
    >
      <Flex flexGrow={1} alignItems="center" justifyContent="center">
        <Box mb={[50, 100]}>
          <Image src={zippLogo} width={[200, 400]} />
        </Box>
        <Heading fontSize={[1, 3]} color="black">
          <Typed
            strings={["CRYPTO", "COMING SOON"]}
            backDelay={3000}
            backSpeed={40}
            typeSpeed={50}
            cursorChar="_"
          />
        </Heading>
      </Flex>
      <Flex mb={2}>
        <Text>2021 Zipp Inc.</Text>
      </Flex>
    </Flex>
  );
};

export default SplashView;
