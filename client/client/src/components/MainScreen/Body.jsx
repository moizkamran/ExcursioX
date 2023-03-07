import Test from "./Test";
import { Text, Title } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useState } from "react";

const Body = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          borderRadius: "50px 0 0 0",
          backgroundColor: "white",
          marginLeft: "20px",
          padding: "20px",
          flex: 1,
        }}
      >
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ marginBottom: 10 }}>Home  Dashboard</Text>
          <Title order={2}>Welcome Back, Talha!</Title>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <Title order={4} style={{ marginRight: 10 }}>
              Today's Overview
            </Title>
            <IconArrowLeft
              onClick={() => setCount(count - 1)}
              size={20}
              strokeWidth={2}
              color="black"
              style={{ marginRight: 10 }}
            />
            <p style={{ margin: 0, marginRight: 10 }}> {count}</p>
            <IconArrowRight
              onClick={() => setCount(count + 1)}
              size={20}
              strokeWidth={2}
              color="black"
              style={{ marginRight: 10 }}
            />
          </div>
          <Test />
        </div>
      </div>
    </>
  );
};

export default Body;
