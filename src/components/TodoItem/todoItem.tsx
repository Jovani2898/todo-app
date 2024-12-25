import React from 'react';
import { View, Text,Button } from 'react-native';
import { styles } from './styles';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, completed && styles.completed]}>{task}</Text>
      <View style={styles.buttons}>
        <Button title={completed ? 'Undo' : 'Complete'} onPress={onToggle} />
        <Button title="Delete" onPress={onDelete} color="red" />
      </View>
    </View>
  );
};




