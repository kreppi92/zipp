import { Flex, Heading } from "components";
import ZippAnimation from "components/assets/ZippAnimation";
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
        <Flex
          mb={[50, 100]}
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <ZippAnimation width={[100, 150]} height={[100, 150]} />
          <Heading fontFamily="Space mono" fontSize={[6, "112px"]} mb={25}>
            zipp
          </Heading>
        </Flex>
        <Heading fontSize={[1, 3]} color="black">
          <Typed
            strings={["COMING SOON"]}
            startDelay={2000}
            backDelay={3000}
            backSpeed={40}
            typeSpeed={50}
            cursorChar="_"
          />
        </Heading>
      </Flex>
      <Flex mb={2}>{/* <Text>2021 Zipp Inc.</Text> */}</Flex>
    </Flex>
  );
};

export default SplashView;
