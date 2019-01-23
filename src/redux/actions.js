import { ADD_TODO } from './actionTypes'

let nextTodoId = 0

// export const addTodo = content => ({
//     type: ADD_TODO,
//     payload: {
//         id: ++nextTodoId,
//         content
//     }
// })

export const addTodo = content => {
    console.log(content)
    return {
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content
        }
    }
}