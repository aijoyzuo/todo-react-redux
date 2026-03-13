import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            state.items.push(newTodo)
        },
        toggleTodo: (state, action) => {
            const targetTodo = state.items.find((item) => item.id === action.payload)
            if (targetTodo) {
                targetTodo.completed = !targetTodo.completed
            }
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const targetTodo = state.items.find((item) => item.id === id);

            if (targetTodo) {
                targetTodo.text = text;
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer