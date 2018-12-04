import React from 'react';
import { connect } from 'react-redux';
import { addItem } from  '../actions';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

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
             }
            }
            >
                <FormGroup
                    controlId="formBasicText"
                    //validationState={this.getValidationState()}
                >
                    <ControlLabel>Enter TODO</ControlLabel>
                    <FormControl inputRef={ref => { input = ref; }} />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
                <Button bsStyle="primary" type="submit">Add Todo</Button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
