import { useState } from "react"
import { Button, TextInput, View } from "react-native"
import { styles } from "./styles"

export const AddTodo = ({onAdd}: {onAdd: (text: string) => void }) => {
        const [text, setText] = useState('')

        const handleAdd = () => {
            if(text.trim()){
                onAdd(text)
                setText('')
            }
        }

        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="Add new task..."
                value={text}
                onChangeText={setText}
                style={styles.input}
                />
            <Button title="Add" onPress={handleAdd}/>
            </View>
        )
}