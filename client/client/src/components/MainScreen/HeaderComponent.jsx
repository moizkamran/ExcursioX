import logoImage from "../../assets/Logo1.png";
import { Header } from "@mantine/core";

import {
  Center,
  Navbar,
  Stack,
  Card,
  Button,
  Text,
  Tooltip,
  UnstyledButton,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logo: {
    height: 20,
    marginLeft: 10,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121927",
    color: "white",
    height: 40,
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
}));
export default function HeaderComponent() {
  const { classes, cx } = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#121927",
        minHeight: "100vh",
      }}
    >
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logoImage} alt="Logo" />
        </div>
        <div className={classes.headerRight}>
          <Button variant="outline" color="white">
            Logout
          </Button>
        </div>
      </header>
      <div
        style={{
          marginLeft: 100, // leave space for the navbar
          marginTop: 20, // add some margin to the card
          borderRadius: "100px 0 0 0", // border radius on top left corner
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Card
          style={{
            overflowY: "auto",
            width: "100%",
            height: "calc(100vh - 60px - 20px - 100px)",
            borderRadius: "100px 0 0 0", // border radius on top left corner
            padding: "100px",
          }}
        >
          <Text>Hello, moiz has been here</Text>
        </Card>
      </div>
    </div>
  );
}
