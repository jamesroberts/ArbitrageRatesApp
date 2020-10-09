import React from "react";
import { Text, View } from "react-native";

export const Rates = ({ rates }) => {
    console.log("Updated rates");
    console.log(rates);
    return (
        <View>
            <Text>{rates.luno}</Text>
            <Text>{rates.valr}</Text>
            <Text>{rates.kraken}</Text>
        </View>
    );
}