import { connect } from 'react-redux';
import { toggleItem } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => (
    {
        todos: state.todos
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggleItem: id => dispatch(toggleItem(id))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoList)