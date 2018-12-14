import React from 'react';
import { connect } from 'react-redux';
import { addItem } from  '../actions';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

const AddTodo = ({ dispatch }) => {
   let input;

    return (
        <div>
            <form  onSubmit={e => {
               e.preventDefault()
               if (!input.value.trim()) {
                   return;
               }
                dispatch(addItem(input.value));
                input.value = '';
              }}
            >
                <FormGroup
                    controlId="formBasicText"
                //    validationState={input.value===null?'':input.value.length>10?'success':input.value.length>5? 'warning':input.value.length>0?'error':null}
                >
                    <FormControl inputRef={ref => { input = ref; }} />
                </FormGroup>
                <Button bsStyle="primary" type="submit">Add Todo</Button>
            </form>
        </div>
    )
}


export default connect()(AddTodo)
