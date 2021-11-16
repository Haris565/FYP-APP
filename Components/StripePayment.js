
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert,  TouchableOpacity } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

const StripePayment = () => {
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment();
    return (
        <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={value => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={cardDetails => {
            setCardDetails(cardDetails);
          }}
        />
        <TouchableOpacity>
            <Text>Pay</Text>
        </TouchableOpacity>

      </View>
    )
}

export default StripePayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 20,
      },
      input: {
        backgroundColor: "#efefefef",
    
        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding: 10,
      },
      card: {
        backgroundColor: "#efefefef",
      },
      cardContainer: {
        height: 50,
        marginVertical: 30,
      },
})
