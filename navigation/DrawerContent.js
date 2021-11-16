import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Icon, Container, Header, Content, Footer, Button, Left, Thumbnail} from 'native-base'
import COLORS from "../consts/color";
import { Avatar, ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native'

const DrawerContent = (props) => {


     const {height} = Dimensions.get('screen');

     console.log(height);
    return (
        
            <View>
                <View style={{backgroundColor:COLORS.primary, height:height/5}}>
                    <View style={{ marginTop: 50, marginHorizontal:20, flexDirection:"row", alignItems:"center", }}>
                          <Avatar rounded size='large' titleStyle={{color:COLORS.primary}} containerStyle={{backgroundColor:COLORS.white, }}
                                title='H'
                                // source={{ uri: avatar_url }}
                            />
                            <View style={{marginLeft:10}}>
                                <Text style={{marginTop:10, color:COLORS.white, fontSize:18, fontWeight:'bold'}}>
                                    Haris
                                </Text>
                            </View>
                    </View>

                    
                </View>

                <View style={{height:height-height/4}}>
                        <DrawerContentScrollView {...props}>
                             <DrawerItemList {...props} />
                        </DrawerContentScrollView>
                </View>

                <View style={{}}>
                    
                </View>
                
            </View>

               
            
     
      

    )
}

export default DrawerContent

const styles = StyleSheet.create({})
