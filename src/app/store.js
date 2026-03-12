import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'

export const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})


//state	        所有資料
//action	    要做的事情
//payload	    傳進來的資料
//reducer	    如何修改 state
//useDispatch   送資料 
//useSelector   讀資料 