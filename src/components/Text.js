import styled from "styled-components";
import { typography, color, layout, space } from "styled-system";

export const Text = styled.div`
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  ${space};
  ${layout};
  ${color};
  ${typography};
`;

Text.defaultProps = {
  fontSize: 0,
  color: "grey",
};
