import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
            <View style={styles.goal}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goal: {
      padding: 10,
      margin: 10,    
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});

export default GoalItem;
