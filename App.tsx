import * as React from "react";
import { Audio } from "expo-av";

import store from "./src/store/store";
import {Container} from './styles'
import { Provider } from "react-redux";
import RecorderButton from "./src/components/RecorderButton";
import 'react-native-gesture-handler';

export default function App() {

  async function requestPermissions() {
    console.log("Requesting permissions");
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
  }

  React.useEffect(() => {
    requestPermissions()
  }, [])

  return (
    <Provider store={store}>
      <Container>
        <RecorderButton />
      </Container>
    </Provider>
  )
}


