import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList,ScrollView} from 'react-native'
import FavoriteList from '../Components/FavoriteList';
import { Avatar, Header } from 'react-native-elements';
import COLORS from "../consts/color";
import Icon from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 
import axios from "axios";
import { useSelector } from 'react-redux';
import { local_ip } from '../consts/ip';

const Left = ({navigation}) =>{
    return(
    <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>)
}

const Favorite = ({navigation}) => {


    const [response, setresponse] = useState()
    const [loading, setloading] = useState(false)
    const user = useSelector(state => state.auth.user)
    console.log(local_ip)

    useEffect(() => {
        
        setloading(true)
        axios.request({
        method: 'GET',
        url: `http://${local_ip}:5000/api/user/getFavorites`,
      
        }).then((res)=>{ 
            console.log(res.data.favorites);
            setresponse(res.data.favorites)
            setloading(false)
          }).catch((err)=>{
                console.log(err)
          })
       
      
        
    }, [user])

  

    
    return (
        <ScrollView>
            <Header backgroundColor={COLORS.primary} containerStyle={{height:100}}
           
                leftComponent={ <Left navigation={navigation} />}
                centerComponent={{ text: 'Favorites', style: { color: '#fff', fontSize:18 } }}
            />
            <View style={{marginBottom:20}}> 
            {loading ?    <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>: 
            <View>
                    {/* <FlatList
                        data={response}
                        renderItem={(item)=><FavoriteList items={item} />}
                        keyExtractor={item=>item._id}
                    /> */}

                    {response && response.map((item, index)=> {
                        return (
                            <FavoriteList key={index} items={item}/>
                        )
                    })}
        
            </View>
            }
            </View>
        </ScrollView>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      horizontal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:90
      },
})
