import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import COLORS from '../consts/color';


const ReviewAndRating = ({navigation}) => {
    return (
        <View>

            <View style={{justifyContent:"center", alignItems:"center", marginTop:15}}>
                <Text style={{fontSize:18, fontWeight:"bold"}}>Review and Rating</Text>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                    <AntDesign name="star" size={20} color="orange" />
                    <Text style={{fontWeight:"bold", fontSize:40, marginHorizontal:3}}>4.9</Text>
                </View>
              
            </View>
            <View style={{backgroundColor:COLORS.gray, marginHorizontal:20, borderRadius:8, paddingVertical:20}}>
              <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginHorizontal:10}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <Avatar
                            rounded
                            icon={{name: 'user', type: 'font-awesome'}}
                            activeOpacity={0.7}
                            containerStyle={{backgroundColor:"white"}}
                        />
                        <Text style={{marginLeft:10}}>
                            Haris
                        </Text>
                    </View>
                    <View style={{}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <AntDesign name="star" size={16} color="orange" />
                            <Text style={{}}>
                                5.0
                            </Text>
                        </View>
                      
                    </View>
                    
                </View>
                <View style={{marginHorizontal:10}}>
                    <Text style={{}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque
                    </Text>
                </View>
            </View>
            
           
        </View>
    )
}

export default ReviewAndRating

const styles = StyleSheet.create({})
