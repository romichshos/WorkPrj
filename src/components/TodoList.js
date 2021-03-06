import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';


const TodoList = ({todos=[], toggleItem})=> (
   <ListGroup>
       {todos.map(todo => (
           <Todo key={todo.id} {...todo} onClick={() => toggleItem(todo.id)} />
       ))}
   </ListGroup>
)

    TodoList.PropTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo: PropTypes.func.isRequired
}

export default TodoList