import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type NavLinkProps = {
  icon: React.ElementType;
  children: React.ReactNode;
} & ChakraLinkProps;

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => (
  <Link display="flex" align="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
);
