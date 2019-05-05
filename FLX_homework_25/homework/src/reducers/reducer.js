import UserData from '../data';

const initialState = {
    data: UserData,
    limit: 5
};

function reducer(state = initialState, action) {
    if (action.type === 'REMOVE') {
        return {
            ...state,
            limit: state.limit - 1,
            data: state.data.filter((user) => user.id !== action.id)
        };
    } else if (action.type === 'MORE') {
        return {
            ...state,
            limit:
            state.limit + 5 > state.data.length
                ? (state.limit = state.data.length)
                : state.limit + 5
        };
    } else return state;
}
export default reducer;