import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const Todo = ({onClick=f=>f, completed, text})=> (
    <ListGroupItem href="#" active
        onClick={onClick}
        bsStyle={completed ? "success" : "info"}
    > {text}
    </ListGroupItem>

)

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: propTypes.bool.isRequired
}

export default Todo