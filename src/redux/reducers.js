const initValue = [];
const rootReducer = (state = initValue, action) => {
    /*
    action = {
        type: ,
        payload: ,
    }
    */
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1 
            };
        
        default:
            return state;
    }
}