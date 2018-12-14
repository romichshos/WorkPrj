import React from 'react';
import AddTodo from '../containers/AddTodo';
import Link from '../containers/Link';
import VisibleTodoList  from "../containers/VisibleTodoList";
import Footer from './Footer';
import { Grid, Row, Col, Label } from 'react-bootstrap';




const App = () => (
    <div>
        <Grid>
            <Row className="show-grid">
              <Col xs={6} md={8}>
              <div className="todolist h1,h2">
                  <h2><Label bsStyle="primary">Todo List</Label></h2>
              </div>
              </Col>
            </Row>
        <Row className="show-grid">
            <Col xs={6} md={8}>
                <AddTodo/>
                <VisibleTodoList/>
                <Link/>
            </Col>
        </Row>
       </Grid>
    </div>
)


export default App