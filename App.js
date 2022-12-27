import React, { useEffect, useState } from "react";
import { Animated, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import "react-native-console-time-polyfill";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.View`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const App = () => {
  const Y = new Animated.Value(0);
  const moveUp = () => {
    Animated.spring(Y, {
      toValue: 200,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  };

  Y.addListener(() => console.log(Y));

  return (
    <Container>
      <TouchableOpacity onPress={moveUp}>
        <AnimatedBox
          style={{
            transform: [{ translateY: Y }],
          }}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default App;
