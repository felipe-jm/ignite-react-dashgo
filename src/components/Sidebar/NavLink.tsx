import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

import { ActiveLink } from "components/ActiveLink";

type NavLinkProps = {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
} & ChakraLinkProps;

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => (
  <ActiveLink href={href} passHref>
    <ChakraLink display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </ActiveLink>
);
