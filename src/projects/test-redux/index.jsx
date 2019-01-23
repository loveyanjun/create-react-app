import React from 'react'
import AddToDo from './components/addTodo'
import './styles/index.css'

export default class TestRedux extends React.PureComponent {
    render () {
        return (
            <div className='test-redux'>
                <AddToDo />
            </div>
        )
    }
}