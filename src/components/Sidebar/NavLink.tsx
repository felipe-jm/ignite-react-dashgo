import Link from "next/link";

import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type NavLinkProps = {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
} & ChakraLinkProps;

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => (
  <Link href={href} passHref>
    <ChakraLink display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </Link>
);
