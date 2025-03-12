import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  taskText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default function App() {
  // Initial data for tasks
  const [tasks, setTasks] = useState([
    { key: '1', title: 'Title1', completed: false },
    { key: '2', title: 'Title2', completed: false },
  ]);

  // Toggle function to update the checked status of the checkbox
  const toggleCheckbox = (key) => {
    setTasks(
      tasks.map((task) =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      {/* CheckBox component */}
      <CheckBox
        checked={item.completed}
        onPress={() => toggleCheckbox(item.key)} // Toggle the checkbox when clicked
      />
      <Text style={[styles.taskText, item.completed && { textDecorationLine: 'line-through' }]}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* FlatList to display tasks with CheckBoxes */}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}
