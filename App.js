import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  Easing,
  Pressable,
} from "react-native";
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

  const POSITION = useRef(new Animated.ValueXY({ x: 0, y: 300 })).current;

  const toggleUp = () => setUp((prev) => !prev);

  const moveUp = () => {
    Animated.timing(POSITION, {
      toValue: up ? 300 : -300,
      useNativeDriver: false,
      duration: 1000,
    }).start(toggleUp);
  };

  // Y_POSITION.addListener(() => console.log(opacityValue));

  const opacityValue = POSITION.y.interpolate({
    inputRange: [-300, -100, 100, 300],
    outputRange: [1, 0, 0, 1],
  });

  const borderRadius = POSITION.y.interpolate({
    inputRange: [-300, -100, 100, 300],
    outputRange: [100, 0, 0, 100],
  });

  const rotation = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["360deg", "-360deg"],
  });

  const bgColor = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["rgb(255, 99, 71)", "rgb(71, 166, 255)"],
  });

  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
          style={{
            opacity: opacityValue,
            borderRadius: borderRadius,
            backgroundColor: bgColor,
            transform: [{ rotateY: rotation }, { translateY: POSITION.y }],
          }}
        />
      </Pressable>
    </Container>
  );
};

export default App;
