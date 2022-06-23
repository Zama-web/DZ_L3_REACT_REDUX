import { types } from "../../types"


export const changeTitleAction = () => {
    return {
        type: types.CHANGE_TITLE
    }
}
export const changeInputAction = (data) => {
    return {
        type: types.CHANGE_DATA,
        payload: data
    }
}
export const clearDataAction = (user) => {
    return {
        type: types.CLEAR_DATA,
        payload: user
    }
}
export const addUserAction = (user) => {
    return {
        type: types.ADD_USER,
        payload: user
    }
}
export const createNumberAction = (number) => {
    return {
        type: types.CREATE_NUMBER,
        payload: number
    }
}
