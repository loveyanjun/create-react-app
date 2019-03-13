import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import todos from '../../../redux/reducers/todos'
// import { getTodosByVisibilityFilter } from '../../../redux/selectors'
import '../styles/todo-list.css'

class TodoList extends React.PureComponent {
    static propTypes = {
        todoList: PropTypes.array
    }

    render () {
        const { todoList } = this.props
        console.log(todoList)
        return (
            <div className='todo-list'>
                <h1>列表展示：</h1>
                {todoList && todoList.length > 0 ?
                    todoList.map(({id, content}) => (
                        <div key={id}>
                            <p>列表id:{id}</p>
                            <p>列表内容:{content}</p>
                        </div>
                    )) : null}
            </div>
        )
    }
}

// const TodoList = ({todoList}) => (
//     <ul className="todo-list">
//       {todoList && todoList.length
//         ? todoList.map(({id, content}) => {
//             return (
//                 <div key={id}>{content}</div>
//             )
//           })
//         : "No todos, yay!"}
//     </ul>
//   );

const mapStateToProps = state => {
    // const { visibilityFilter } = state
    const { todoList } = state.todos
    return {
        todoList
    }
}

export default connect(mapStateToProps)(TodoList)