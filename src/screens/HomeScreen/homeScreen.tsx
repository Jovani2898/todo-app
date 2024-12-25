import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { AddTodo } from '../../components/AddTodo/addTodo';
import { TodoList } from '../../components/TodoList/todoList';
import { styles } from './styles';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

export const HomeScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string,) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), task, completed: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () =>
          setTodos((prev) => prev.filter((todo) => todo.id !== id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </View>
  );
};

