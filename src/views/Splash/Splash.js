import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";

import { StyledHeading } from "../../components";

// background-color: #eeeeee;
const Center = styled.div`
  background-color: #1e2423;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const SubHeading = styled.h2`
  font-family: "JetBrains Mono", monospace;
`;

const StyledLink = styled.a`
  color: rgb(0, 255, 163);
  border-bottom: 1px solid rgb(0, 255, 163);
  padding-bottom: 3px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #fff;
    transition-duration: 0.2s;
    border-bottom: 1px solid rgb(255, 255, 255);
  }
`;

const SplashView = () => {
  return (
    <Center>
      <StyledHeading>ZYNGLY</StyledHeading>
      <SubHeading>COMING SOON</SubHeading>
      <SubHeading>
        <StyledLink href="https://twitter.com/zynglycrypto">
          <TwitterIcon /> @ZYNGLYCRYPTO
        </StyledLink>
      </SubHeading>
    </Center>
  );
};

export default SplashView;
