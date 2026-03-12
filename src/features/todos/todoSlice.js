import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    items:[]
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const newTodo = {
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            state.items.push(newTodo)
        },
        toggleTodo:(state,action)=>{
            const targetTodo = state.items.find((item) => item.id === action.payload)
            if(targetTodo){
                targetTodo.completed = !targetTodo.completed
            }
        },
        deleteTodo:(state,action)=>{
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer