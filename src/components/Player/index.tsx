import React from "react";
import {
  PlayTouchable,
  Row,
  SliderWrapper,
  IconsWrapper,
} from "./styles";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Colors from "../../theme/Colors";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  View as MotiView,
} from "moti";

const Player = ({ uri }) => {
  function pad(n, width, z = 0) {
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  const minutesAndSeconds = (position) => [
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2),
  ];

  const onPlayRecord = async () => {
    console.log("Loading record");
    console.log(uri);
    const { sound } = await Audio.Sound.createAsync({ uri: uri });
    await sound?.playAsync();
  };

  return (
    <MotiView
      from={{
        translateX: 500,
      }}
      animate={{
        translateX: 0,
      }}
      transition={{
        loop: false,
        type: "timing",
        duration: 500,
        delay: 100,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={{
        width: 300,
        flexDirection: "row",
        backgroundColor: Colors.primary,
        alignItems: "center",
        borderRadius: 30,
        position: "absolute",
        top: 100,
      }}
    >
      <Row>
        <PlayTouchable onPress={() => onPlayRecord()}>
          <AntDesign name="caretright" size={24} color={Colors.white} />
        </PlayTouchable>
      </Row>
      <SliderWrapper>
        <Slider thumbTintColor={Colors.white} />
      </SliderWrapper>
      <IconsWrapper>
        <Feather name="bar-chart-2" size={24} color={Colors.white} />
        <FontAwesome5 name="microphone" size={12} color={Colors.white} />
      </IconsWrapper>
    </MotiView>
  );
};

export default Player;
