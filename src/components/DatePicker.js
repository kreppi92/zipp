import styled from "styled-components";

import { Heading } from "components";
import { DatePicker as AntDatePicker } from "antd";
import { Flex } from "@chakra-ui/react";
import { color, layout, space, variant } from "styled-system";

const StyledAntDatePicker = styled(AntDatePicker)`
  ${space}
  ${color}
  ${layout}
  ${variant({
    variants: {
      primary: {
        fontWeight: 500,
        fontFamily: `"Lato", sans-serif;`,
        textTransform: `uppercase`,
        "&:hover": {
          borderColor: "teal.3",
        },
        "&:focus": {
          borderColor: "teal.3",
          boxShadow: "0 0 0 2px rgb(63, 211, 184 / 20%)",
        },
        "&:active": {
          borderColor: "teal.3",
          boxShadow: "0 0 0 2px rgb(63, 211, 184 / 20%)",
        },
      },
    },
  })}
`;

const DatePicker = ({ label, ...otherProps }) => {
  return (
    <Flex my={3} pr={3} flexDirection="column">
      {label && (
        <Heading fontSize={1} mb={2}>
          {label}
        </Heading>
      )}
      <StyledAntDatePicker {...otherProps} />
    </Flex>
  );
};

DatePicker.defaultProps = {
  variant: "primary",
};

export default DatePicker;
