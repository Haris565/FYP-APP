import React, {useState} from 'react'
import { StyleSheet, Text, View ,FlatList, TouchableOpacity} from 'react-native'
import ChatListItem from '../Components/ChatListItem'
import { Header } from 'react-native-elements';
import COLORS from "../consts/color";
import Icon from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 
import { local_ip } from '../consts/ip';

const Left = ({navigation}) =>{
    return(
    <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>)
}

const ChatScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

        <Header backgroundColor={COLORS.primary} containerStyle={{height:100}}
           leftComponent={ <Left navigation={navigation} />}
           centerComponent={{ text: 'Messages', style: { color: '#fff', fontSize:18 } }}
        />
            {/* <FlatList
            style={{width: '100%'}}
            data={chatRooms}
            renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
            keyExtractor={(item) => item.id}
            /> */}
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       
      },
})


