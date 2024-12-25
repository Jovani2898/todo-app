import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    flex: 1, 
    marginRight: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
