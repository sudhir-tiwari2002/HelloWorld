import { Alert } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";


export default function AlartUi(){
    return <View style={{flex:1,backgroundColor:"plum" , padding:60}}>
        <Button title="Alart" onPress={()=> Alert.alert("Invalid data")}/>
        <Button title="Alart 2" onPress={()=> Alert.alert("Invalid data" , "data is not valid")}/>
        <Button title="Alart 3" onPress={()=> Alert.alert("Invalid data" , "data is not valid" ,[
            {
                text: "Cancel",
                onPress:()=>console.log("Cancel pressed")
            },
            {
                text:"Ok",
                onPress:()=> console.log("Okk pressed")
            }
        ])} />
    </View>
}