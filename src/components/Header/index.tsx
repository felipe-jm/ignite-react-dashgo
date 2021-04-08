import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "contexts/SidebarDrawerContext";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isDesktopOrTablet = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isDesktopOrTablet && (
        <IconButton
          aria-label="Open navigation drawer"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isDesktopOrTablet && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isDesktopOrTablet} />
      </Flex>
    </Flex>
  );
};
