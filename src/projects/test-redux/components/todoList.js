import React from 'react'
import { connect } from 'react-redux'
import todos from '../../../redux/reducers/todos'

export default class TodoList extends React.PureComponent {
    render () {
        return (
            <div>
                <h1>列表展示：</h1>

            </div>
        )
    }
}

export default connect(todos)(TodoList)