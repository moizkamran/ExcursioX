import logoImage from "../../assets/Logo1.png";
import { useState } from "react";

import {
  Center,
  Navbar,
  Stack,
  Card,
  Tooltip,
  UnstyledButton,
  createStyles,
} from "@mantine/core";

import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons";
const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
    logo: {
      height: 60,
    },
  },
}));

function NavbarLink(props) {
  const { icon: Icon, label, active, onClick } = props;
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export default function Nav() {
  const { classes } = useStyles();

  const [active, setActive] = useState(2);

  const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconGauge, label: "Dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
    { icon: IconCalendarStats, label: "Releases" },
    { icon: IconUser, label: "Account" },
    { icon: IconFingerprint, label: "Security" },
  ];

  const links = mockdata.map((link, index) => (
    <NavbarLink
      icon={link.icon}
      label={link.label}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#121927" }}
        height="100vh"
        width={{ base: 100 }}
        p="md"
      >
        <Center>
          <img className={classes.logo} src={logoImage} alt="Logo" />
        </Center>

        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>

        <NavbarLink icon={IconLogout} label="Logout" />
      </Navbar>
    </>
  );
}
