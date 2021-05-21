import styled from "styled-components";
import { typography, color, layout, space } from "styled-system";

export const Heading = styled.div`
  font-family: ${(props) =>
    props.alt ? "'Raleway', sans-serif;" : "'JetBrains Mono', monospace;"};
  ${space};
  ${layout};
  ${color};
  ${typography};
`;
