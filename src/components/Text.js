import styled from "styled-components";
import { typography, color, layout, space } from "styled-system";

export const Text = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  ${space};
  ${layout};
  ${color};
  ${typography};
`;

Text.defaultProps = {
  fontSize: 2,
  color: "offblack",
};
