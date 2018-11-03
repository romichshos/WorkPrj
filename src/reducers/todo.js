import C from '/constants.js';

const todo = (state={}, action) =>{
    switch (action.type){
        case C.ADD_ITEM:
            return {
                id: action.id,
                text: action.text,
                completed: false
        }
        case C.TOGGLE_ITEM:
            return (state.id===action.id)?{
                ...state,
                completed: (action.completed=true)? false: true
            }
        default: return state
    }

}

export default todo
