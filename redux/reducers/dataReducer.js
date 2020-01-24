import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS: {
            return {
                data: action.payload,
            };
        }
        default:
            return state;
    }
};
