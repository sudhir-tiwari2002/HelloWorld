

import ActivityIndicatorUi from "./components/ActivityIndicator";
import AlartUi from "./components/Alart";
import ButtonUi from "./components/Button";
import Greet from "./components/Greet";
import ImageUi from "./components/Image";
import ModalUi from "./components/Modal";
import PressableUi from "./components/Pressable";
import StatusBarUi from "./components/StatusBar";
import TextUi from "./components/Text";
import ViewUi from "./components/View";
import {View} from 'react-native'


export default function App() {
  return <View style={{flex:1, backgroundColor:"plum", padding:60}}>
    {/* // <ViewUi/>
    // <ImageUi/>
    // <ButtonUi/>
    // <PressableUi/>
    // <ModalUi/>
    // <StatusBarUi/>
    // <ActivityIndicatorUi/>
    // <AlartUi/> */}
    <Greet name="sudhir"/>
    <Greet name="Awneesh"/>
    </View>
  ;
}
