import {Button, View} from 'react-native'

export default function ButtonUi(){
    return <View style={{flex:1,backgroundColor:'plum',padding:60}}>
        <Button title='Press' onPress={()=>console.log("button clicked")} color='green' disabled/>
    </View>

}