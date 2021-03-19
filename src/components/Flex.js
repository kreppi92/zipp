import styled from "styled-components";
import { flexbox, color, layout, space } from "styled-system";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
`;
