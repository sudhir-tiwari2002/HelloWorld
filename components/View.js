import { View } from "react-native";


export default function ViewUi() {
    return (
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <View style ={{backgroundColor:'lightblue', width:200, height:200}}></View>
        <View style ={{backgroundColor:'lightgreen', width:200, height:200}}></View>
        <View style ={{backgroundColor:'lightblue', width:200, height:200}}></View>
        <View style ={{backgroundColor:'skyblue', width:200, height:200}}></View>
      </View>
    );
  }