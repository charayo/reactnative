import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = (props) => {
  const { value ,id } = props.data.item;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>props.onDelete(id)}>
      <View style={styles.card}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    padding: 30,
    backgroundColor: "white",
    marginVertical: 10,
    elevation:3,
    borderRadius:10,
  },
});

export default Card;
