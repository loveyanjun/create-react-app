import React from 'react'
import { connect } from 'react-redux'
import todos from '../../../redux/reducers/todos'
import { getTodosByVisibilityFilter } from '../../../redux/selectors'
import '../styles/todo-list.css'

class TodoList extends React.PureComponent {
    render () {
        return (
            <div className='todo-list'>
                <h1>列表展示：</h1>

            </div>
        )
    }
}

const mapStateToProps = state => {
    // const { todoList, allIds } = state.todos || {}
    // const todos = allIds && allIds.length ? allIds.map(id => (todoList ? { ...todoList, id } : null)) : null
    // console.log('tttttttt')
    // console.log(todos)
    // return { todos }
    const { visibilityFilter } = state
    console.log('todoList:')
    const todos = getTodosByVisibilityFilter(state, visibilityFilter)
    console.log(todos)
    return { todos }
}

export default connect(mapStateToProps)(TodoList)