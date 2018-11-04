import todo from '../reducers/todo.js';
import C from '../constants.js';

const todoList = (state=[], action) => {
    switch (action.type) {
        case C.ADD_ITEM:
            return [
                ...state,
                todo({}, action)
            ]
        case C.DEL_ITEM:
            return state.filter(c => c.id!=action.id)
        case C.TOGGLE_ITEM:
            return state.map(c => todo(c, action)
        default: return state
    }
}

export default todoList
