import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { Entypo, Ionicons } from '@expo/vector-icons';
import COLORS from '../consts/color';
const list = [
  {
    name: 'HH Salon',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'HH salon cancel your booking due to unavailibility',
    time:'13:00',
    date:'1/12/12'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },

]

const PrevBookings = () => {
    const appointments = useSelector(state => state.salon.previous)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    console.log("fetched", appointments)
    // if (appointments == null){
    //     return (
    //       <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
    //           <Entypo name="emoji-sad" size={40} color="black" />
    //           <Text>You didnt have any previous appointments</Text>
             
    //       </View>
    //     )
    // }
    // if(appointments.length == 0){
    //   return (
    //     <View style={{flex:1, justifyContent:"center", alignItems:"center", top:windowHeight/3 }}>
    //       <Entypo name="emoji-sad" size={70} color={COLORS.primary} />
    //         <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.primary}}>You didnt have any previous appointments</Text>
    //     </View>
    //   )
    // }
    return (
        <View style={{}}>
            <View style={{marginHorizontal:15, flexDirection:"row", justifyContent:"flex-end", marginTop: 5,
            }}>
              <Ionicons name="filter" size={30} color="black" />
            </View>
            <View style={{backgroundColor:COLORS.gray, marginHorizontal:15, borderRadius:8, marginVertical:10}}>
              <View style={{paddingVertical:10, paddingHorizontal:10, justifyContent:"flex-end", flexDirection:"row"}}>
                <Text style={{}}>
                  Status: Accepted
                </Text>
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between", paddingVertical:10, paddingHorizontal:10, alignItems:"center", 
                borderBottomWidth:2, borderBottomColor:"#e5e7eb"
              }}>
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
              <View style={{paddingVertical:10, paddingHorizontal:10}}>
                  <Text style={{}}>
                      Your Review
                  </Text>
              </View>
          </View>
          
        </View>
       
    )
}

export default PrevBookings

const styles = StyleSheet.create({})
