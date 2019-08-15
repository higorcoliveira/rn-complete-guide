import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString, value: enteredGoal }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.goal}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderColor: 'black',
    borderWidth:  1,
    padding: 10,
    width: 200
  },
  goal: {
    padding: 10,
    margin: 10,    
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
