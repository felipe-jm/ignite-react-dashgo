import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export const Profile = () => (
  <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Felipe</Text>
      <Text color="gray.300" fontSize="small">
        felipemattoseu@gmail.com
      </Text>
    </Box>

    <Avatar
      size="md"
      name="Felipe Jung"
      src="https://github.com/felipe-jm.png"
    />
  </Flex>
);
