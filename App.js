import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import "react-native-console-time-polyfill";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.TouchableOpacity`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const App = () => {
  const [y, setY] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const moveUp = () => {
    const id = setInterval(() => setY((prev) => prev + 1), 1);
    setIntervalId(id);
  };

  useEffect(() => {
    if (y === 200) {
      clearInterval(intervalId);
    }
  }, [y, intervalId]);

  console.log("rendering");
  return (
    <Container>
      <Box
        onPress={moveUp}
        style={{
          transform: [{ translateY: y }],
        }}
      ></Box>
    </Container>
  );
};

export default App;
