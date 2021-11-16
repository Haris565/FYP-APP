import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import COLORS from '../consts/color';


const BookingList = () => {
    const appointments = useSelector(state => state.salon.accepted)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    console.log("fetched", appointments)
    // if (appointments == null){
    //     return (
    //       <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
    //           <Entypo name="emoji-sad" size={40} color="black" />
    //           <Text>You didnt have any upcoming appointments</Text>
             
    //       </View>
    //     )
    // }
    // if(appointments.length == 0){
    //   return (
    //     <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
    //       <Entypo name="emoji-sad" size={70} color={COLORS.primary} />
    //         <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.primary}}>You didnt have any upcoming appointments</Text>
    //     </View>
    //   )
    // }
    return (
        <View style={{
                      backgroundColor:COLORS.gray, marginVertical:10 , paddingVertical:10,
                      marginHorizontal:15, borderRadius:8, paddingHorizontal:10, flexDirection:'row',
                      justifyContent:"space-between",
                      alignItems:"center"
                    }}
        >

          <View style={{}}>
            <Text style={{}}>
                8th October at 4:32
            </Text>
            <Text style={{}}>
              Services: Hair, beard 
            </Text>
            <Text style={{}}>
              Deplix Salon
            </Text>
            <Text style={{}}>
              address
            </Text>
          </View>
          <View style={{}}>
            <Text style={{}}>
              120$
            </Text>
          </View>
           
        </View>
    )
}

export default BookingList

const styles = StyleSheet.create({})
