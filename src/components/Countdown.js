import { useState, useEffect } from "react";
import { calculateCountdownFromNow } from "utils";
import { Text } from "@chakra-ui/react";

export const Countdown = ({ countdownDate }) => {
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => calculateCountdownFromNow(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(calculateCountdownFromNow(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired, countdownDate]);

  return (
    <Text
      fontSize={18}
      fontFamily="JetBrains Mono"
      mb={2}
      color={days ? "default" : "red.500"}
    >
      {!!days && `${days}d `}
      {(!!hours && `${hours}h `) || "00"}
      {!!minutes && `00`}:{seconds}
    </Text>
  );
};

Countdown.defaultProps = {
  countdownDate: "June 10, 2021",
};
