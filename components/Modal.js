import {View,Button , Modal , Text} from 'react-native'
import { useState } from 'react'

export default function ModalUi (){
    const [isModalVisible,setIsModalVisible] =useState(false)
    return <View style={{flex:1,backgroundColor:"plum",padding:60}}>
        <Button onPress={()=> setIsModalVisible(true)} title='Click me' color='#b74bfa'/>

        <Modal visible={isModalVisible} onRequestClose={()=> setIsModalVisible(false)} animationType='slide' presentationStyle='pagesheet'>
        <View style={{flex:1,backgroundColor:"lightblue",padding:60}}>
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
        <Button onPress={()=> setIsModalVisible(false)} title='Click me' color='#b74bfa' />
        </View>
        </Modal>

    </View>
}