import { ADD_TODO } from '../actionTypes'

const initialState = {
    allIds: [],
    todoList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload
            console.log(state)
            return {
                ...state,
                allIds: [...state.allIds, id],
                // todoList: {
                //     ...state.todoList,
                //     [id]: {
                //         content,
                //         completed: false
                //     }
                // }
                todoList: [{
                    id: content,
                    content,
                    completed: false
                }]
            }
        }
        default:
            return state;
    }
}