import { connect } from 'react-redux';
import { toggleItem } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos=[], filter= VisibilityFilters.SHOW_ALL) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => (
    {
        todos: state.todos
      //todos:  getVisibleTodos(state.todos, state.visibilityFilter)
    }
)

const mapDispatchToProps = dispatch => (
    {
        toggleItem: id => dispatch(toggleItem(id))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoList)