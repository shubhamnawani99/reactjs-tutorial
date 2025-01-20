# What is redux?
- Redux is a **State managment library**
### Is it related to or is a part of the React Library?
- No, Redux is an **`independent JS Library`** to management states

# How to install?
```bash
npm install @reduxjs/toolkit
```
```bash
npm install react-redux
```

# How to create a Store?
## What is a store?
- Global space used to store our states
- There is only a single store location, but can have multiple mini-stores as per the functionality eg: Auth-store, cart-store etc.

## app/store.js
```js
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
}) 
```

# How to create a reducer/slices?
```js
import {createSlice, nanoid} from '@reduxjs/toolkit';
// nanoid - used to generate ids
// createSlice - used to create a slice of the state
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // every slice has one
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),   // generate a unique id
                text: action.payload.text, // get the text from the action
            } // create a new todo object
            state.todos.push(todo) // add the todo to the todos array

        },
        removeTodo: (state, action) => {
            const {id} = action.payload // get the id from the action
            state.todos = state.todos.filter(todo => todo.id !== id) // remove the todo with the id from the todos array
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload // get the id and text from the action
            const todo = state.todos.find(todo => todo.id === id) // find the todo with the id
            if (todo) {
                todo.text = text // update the text of the todo
            }
        }
    },// properties and functions that will change the state
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // export the actions

export default todoSlice.reducer // export the reducer
```