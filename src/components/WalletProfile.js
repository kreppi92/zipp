import React from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  useColorModeValue as mode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useWallet } from "contexts";
import { maskWalletAddress } from "utils";

const WalletProfile = () => {
  const { selectedWallet, setSelectedWallet, urlWallet } = useWallet();
  return (
    <VStack>
      {selectedWallet && selectedWallet.connected ? (
        <Menu>
          <MenuButton>
            <Text fontSize="sm">Wallet Address</Text>
            <Text
              fontSize="xs"
              lineHeight="shorter"
              maxWidth={200}
              color={mode("gray.300", "gray.300")}
            >
              {maskWalletAddress(selectedWallet.publicKey.toBase58())}
            </Text>
          </MenuButton>
          <MenuList>
            <MenuItem rounded="md" onClick={() => selectedWallet.disconnect()}>
              <Text color={mode("gray.600", "gray.400")}>Disconnect</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Box onClick={() => setSelectedWallet(urlWallet)}>
          <Text fontSize="sm">No wallet</Text>
          <Text
            fontSize="xs"
            lineHeight="shorter"
            maxWidth={200}
            color={mode("gray.300", "gray.300")}
          >
            Click to connect wallet
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default WalletProfile;
