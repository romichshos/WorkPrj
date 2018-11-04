import C from '../constants.js'

var nextId = 0;

export const addItem =(id,text)=>({
    type: C.ADD_ITEM,
    id: nextId++,
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
