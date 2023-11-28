import { Button ,Image,Pressable,Text,View} from "react-native";
const ImageLogo = require('../assets/adaptive-icon.png')


export default function PressableUi(){
    return <View style={{flex:1 , backgroundColor:'plum' , padding:60}}>
        <Button title="Press" onPress={()=> console.log("buttom pressed")} color='#b74bfa'/>
        <Pressable onPress={()=>console.log("image pressed")}>       
            <Image source={ImageLogo} style={{width:300 , height:300}}/>
        </Pressable>
        <Pressable onPress={()=> console.log("text pressed ")
        }>
                    <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        </Pressable>

    </View>
}