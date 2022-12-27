import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View, TouchableOpacity, Easing } from "react-native";
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
  const [up, setUp] = useState(false);

  const Y = useRef(new Animated.Value(0)).current;

  const toggleUp = () => setUp((prev) => !prev);

  const moveUp = () => {
    Animated.timing(Y, {
      toValue: up ? 200 : -200,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start(toggleUp);
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
