import { Stack } from "@chakra-ui/react";

import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

import { NavSection } from "components/Sidebar/NavSection";
import { NavLink } from "components/Sidebar/NavLink";

export const SidebarNav = () => (
  <Stack spacing="12" align="flex-start">
    <NavSection title="Geral">
      <NavLink href="/dashboard" icon={RiDashboardLine}>
        Dashboard
      </NavLink>
      <NavLink href="/users" icon={RiContactsLine}>
        Usuários
      </NavLink>
    </NavSection>

    <NavSection title="AUTOMAÇÃO">
      <Stack spacing="4" mt="8" align="stretch">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </Stack>
    </NavSection>
  </Stack>
);
