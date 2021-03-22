import { Flex, Heading, Link } from "components";
import { Twitter } from "@material-ui/icons";
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
          mb={[25, 50]}
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <ZippAnimation width={150} height={150} />
          <Heading
            fontFamily="Space mono"
            fontSize={[6, "112px"]}
            mb={25}
            color="black"
          >
            zipp
          </Heading>
        </Flex>
        <Flex width={500} height={50} alignItems="center">
          <Heading fontSize={[1, 3]} color="black" textAlign="center">
            <Typed
              strings={[
                "BUILDING FOR AUDIO, IN CRYPTO ON SOLANA.",
                "COMING SOON",
              ]}
              startDelay={2000}
              backDelay={3000}
              backSpeed={40}
              typeSpeed={50}
              cursorChar="_"
              loop={true}
            />
          </Heading>
        </Flex>
      </Flex>
      <Flex mb={50}>
        <Link href="https://twitter.com/zipp_xyz">
          <Twitter style={{ color: "#007ce0", marginRight: 10 }} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default SplashView;
