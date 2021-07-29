import React from "react";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../../theme/Colors";
import { Container, Lorem, Row } from "./styles";
import {
  View as MotiView,
} from "moti";

const SlideDelete = () => {
  return (
    <Lorem>
      Left to delete{" "}
      <FontAwesome name="trash-o" size={15} color={Colors.white} />
    </Lorem>
  );
};

const SlideLock = () => {
  return (
    <Lorem>
      Right to lock <FontAwesome name="lock" size={15} color={Colors.white} />
    </Lorem>
  );
};

const RecorderBoxFeedback = ({ backgroundColor }) => {
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
    >
      <Container background={backgroundColor}>
        <Row>
          <Lorem style={{ fontSize: 18 }}>00:00</Lorem>
        </Row>
        <Row>
          <Lorem>
            <SlideDelete /> / <SlideLock />
          </Lorem>
        </Row>
        <Row>
          <MotiView
            from={{
              opacity: 1,
            }}
            animate={{
              opacity: 0.4,
            }}
            transition={{
              loop: true,
              type: "timing",
              duration: 1500,
              delay: 200,
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <Feather name="bar-chart-2" size={24} color={Colors.white} />
            <FontAwesome5 name="microphone" size={12} color={Colors.white} />
          </MotiView>
        </Row>
      </Container>
    </MotiView>
  );
};

export default RecorderBoxFeedback;
