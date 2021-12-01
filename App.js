import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Card from "./components/Card";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoal = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setShowModal(false);

  };
  const deleteGoal = (id) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  };
  const cancelModal =()=>{
    setShowModal(false);
  }
  return (
    <View style={styles.container}>
      <Button title="ADD NEW GOAL" onPress={()=>setShowModal(true)}/>
      <GoalInput onAddGoal={addGoal} modalStatus={showModal} onCloseModal={cancelModal}/>
      <FlatList
        data={courseGoals}
        renderItem={(goal) => <Card data={goal} onDelete={deleteGoal}/>}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  flatList: {
    marginBottom: 50,
  },
});
