import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userCourse, setUserCourse] = useState('');
  const isStudent = true;
  const initialHabits = ["Exercise", "Read", "Code"];
  const user = { name: userName || 'N/A', age: userAge || 'N/A', course: userCourse || 'N/A' };
  
  function greetUser(name: string): string {
    return `Hello, ${name}!`;
  }
  const longHabits = initialHabits.filter(habit => habit.length > 5);
  const numberedHabits = initialHabits.map((habit, index) => `${index + 1}. ${habit}`);
  
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState('');
  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, newHabit]);
      setNewHabit('');
    }
  };
  
  const removeHabit = (index: number) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Test</Text>
      
      <View style={styles.card}>
        <Text style={styles.subtitle}>JavaScript Variables Demo:</Text>
        <Text>Name: {userName || 'Enter name'}</Text>
        <Text>Age: {userAge || 'Enter age'}</Text>
        <Text>Course: {userCourse || 'Enter course'}</Text>
        <Text>Student: {isStudent.toString()}</Text>
        <Text>Greeting: {greetUser(userName || 'Guest')}</Text>
        <Text>User Object: {JSON.stringify(user)}</Text>
        <Text>Long habits (filter): {longHabits.join(', ')}</Text>
        <Text>Numbered habits (map): {numberedHabits.join(', ')}</Text>
      </View>
      
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
        placeholder="Enter your name..."
      />
      
      <TextInput
        style={styles.input}
        value={userAge}
        onChangeText={setUserAge}
        placeholder="Enter your age..."
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        value={userCourse}
        onChangeText={setUserCourse}
        placeholder="Enter your course..."
      />
      
      <TextInput
        style={styles.input}
        value={newHabit}
        onChangeText={setNewHabit}
        placeholder="Enter a new habit..."
      />
      
      <View style={styles.summaryBox}>
        <Text style={styles.italicText}>
          {userName || 'Name'}{'\n'}
          {userAge || 'Age'}{'\n'}
          {userCourse || 'Course'}{'\n'}
          Hobbies: {habits.join(', ')}
        </Text>
      </View>
      
      <Button 
        title="Add Habit" 
        onPress={addHabit}
        color="#007AFF"
      />
      
      <Text style={styles.sectionTitle}>Current Habits ({habits.length} total):</Text>
      {habits.map((habit, index) => (
        <View key={index} style={styles.habitItem}>
          <Text style={styles.habitText}>{index + 1}. {habit}</Text>
          <Button 
            title="Remove" 
            onPress={() => removeHabit(index)}
            color="#FF3B30"
          />
        </View>
      ))}
      
      <Text style={styles.note}>
        💡 Test this on your phone via Expo Go!
        Try adding/removing habits.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#F5F5F7' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#1D1D1F',
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007AFF'
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7C7CC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 15,
    color: '#1D1D1F'
  },
  habitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA'
  },
  habitText: {
    fontSize: 16,
    flex: 1
  },
  note: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#E8F4FF',
    borderRadius: 10,
    color: '#0066CC',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  italicText: {
    fontStyle: 'italic',
    marginTop: 15,
    lineHeight: 24
  },
  summaryBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#E5E5EA'
  }
});