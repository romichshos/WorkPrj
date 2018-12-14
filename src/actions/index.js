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


export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}