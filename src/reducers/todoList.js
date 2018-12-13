//import todo from '../reducers/todo.js';
import C from '../constants.js';

const todoList = (state=[], action) => {
    switch (action.type) {
        case C.ADD_ITEM:
            return [
                ...state,
                { id: action.id,
                  text: action.text,
                  completed: false
                }
            ]
        case C.DEL_ITEM:
            return state.filter(c => c.id!==action.id)
        case C.TOGGLE_ITEM:
            return state.map(
                todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default: return state
    }
}

export default todoList
