const initialState = {
    user: null,
};

const USER_ADD = 'USER_ADD';
const USER_REMOVE = 'USER_REMOVE';

export const addUser = user => ({
    type: USER_ADD, user
});

export const removeUser = () => ({
    type: USER_ADD
});

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_ADD:
            return { ...state, user: action.user };
        case USER_REMOVE:
            return {...state, user: null};
        default:
            return state;
    }
};
