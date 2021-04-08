import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export const Profile = ({ showProfileData = true }: ProfileProps) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Felipe</Text>
        <Text color="gray.300" fontSize="small">
          felipemattoseu@gmail.com
        </Text>
      </Box>
    )}

    <Avatar
      size="md"
      name="Felipe Jung"
      src="https://github.com/felipe-jm.png"
    />
  </Flex>
);
