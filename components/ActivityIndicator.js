import { ActivityIndicator,View } from 'react-native';



export default function ActivityIndicatorUi (){
    return <View style={{flex:1 , backgroundColor:'plum',padding:60}}>
        <ActivityIndicator/>
        <ActivityIndicator color="green" size="large" animating={true}/>
    </View>
}