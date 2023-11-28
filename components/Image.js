import {Image, ImageBackground, View}from 'react-native'
const ImageLogo = require('../assets/adaptive-icon.png')

export default function ImageUi (){
    return <View style={{flex:1 , backgroundColor:'plum', gap:5}}>
        <ImageBackground source={{uri:'https://m.media-amazon.com/images/I/31qu4ixHZ3L._AC_UF1000,1000_QL80_.jpg'}}>
        <Image source={ImageLogo} style={{width:300 , height:300}}></Image>
        <Image source={{uri:'https://picsum.photos/seed/picsum/200/300'}} style={{width:300 , height:300}}></Image>
        <Image source={{uri:'https://picsum.photos/200/300?grayscale'}} style={{width:300 , height : 300}}></Image>
        </ImageBackground>
    </View>
}