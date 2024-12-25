import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { TodoItem } from '../TodoItem/todoItem';
import { styles } from './styles';


interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem
          task={item.task}
          completed={item.completed}
          onToggle={() => onToggle(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      )}
      style={styles.list}
    />
  );
};

