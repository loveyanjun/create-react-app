import React from 'react'
import { addTodo } from '../../../redux/actions'
import { connect } from 'react-redux'
import '../styles/add-to-do.css'

class AddToDo extends React.PureComponent {
    state = {
        value: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        const value = e.target.value
        this.setState({
            value
        })
    }

    handleAddTo = () => {
        this.props.addTodo(this.state.value)
        this.setState({
            value: ''
        })
    }

    render () {
        return (
            <div>
                <input className='add-todo-input' onChange={this.handleChange} value={this.state.value}/>
                <button className='add-todo-button' onClick={this.handleAddTo}>点击</button>
            </div>
        )
    }
}

export default connect(null, {
    addTodo
})(AddToDo)