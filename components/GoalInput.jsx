import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const getInput = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const handleAddGoal =()=>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal
      style={styles.inputModal}
      animationType="slide"
      visible={props.modalStatus}
    >
      <View style={styles.inpWrapper}>
        <TextInput
          placeholder="Course Goal"
          style={styles.myInp}
          value={enteredGoal}
          onChangeText={getInput}
        />
        <View style={styles.btnWrap}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={props.onCloseModal}/>
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inpWrapper: {
    width: "100%",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  myInp: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  inputModal: {
    marginTop: 50,
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    width: "20%",
  },
});
export default GoalInput;
