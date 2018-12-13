// ACTION CREATORS
import C from '../constants.js'

let nextTodoId = 0;

export const addItem =(id,text)=>({
    type: C.ADD_ITEM,
    id: nextTodoId++,
    text: text,
    completed: false
})

export const delItem = id =>({
    type: C.DEL_ITEM,
    id
})

export const toggleItem =(id,completed)=>({
    type: C.TOGGLE_ITEM,
    id,
    completed
})
