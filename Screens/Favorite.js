import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FavoriteList from '../Components/FavoriteList';
import { Avatar, Header } from 'react-native-elements';
import COLORS from "../consts/color";
import Icon from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 
import axios from "axios";
import { useSelector } from 'react-redux';


const Left = ({navigation}) =>{
    return(
    <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>)
}

const Favorite = ({navigation}) => {


    const [response, setresponse] = useState()
    const [loading, setloading] = useState()
    const user = useSelector(state => state.auth.user)


    useEffect(() => {
      (async ()=> {
          let res = await axios.get("http://192.168.0.108:5000/api/user/getFavorites")
          console.log(res)
      })
        
    }, [])

    return (
        <View>
            <Header backgroundColor={COLORS.primary} containerStyle={{height:100}}
           
                leftComponent={ <Left navigation={navigation} />}
                centerComponent={{ text: 'Favorites', style: { color: '#fff', fontSize:18 } }}
            />
            <FavoriteList />
            <FavoriteList />
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({})
