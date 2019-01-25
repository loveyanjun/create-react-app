import React from 'react'
import AddToDo from './components/addTodo'
import TodoList from './components/todoList'
import './styles/index.css'

export default class TestRedux extends React.PureComponent {
    render () {
        return (
            <div className='test-redux'>
                <AddToDo />
                <TodoList />
            </div>
        )
    }
}