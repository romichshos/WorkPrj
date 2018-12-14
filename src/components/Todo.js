import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const Todo = ({onClick, completed, text})=> (
    <ListGroupItem href="#"
        onClick={onClick}
        bsStyle={completed ? "success" : "info"}
    > {text}
    </ListGroupItem>

)


Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo