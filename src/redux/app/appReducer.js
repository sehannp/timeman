const INITIAL_STATE = {
    quote:''
}

const appReducer = (currentState=INITIAL_STATE,action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return {
                ...currentState,
                quote: action.payload
            };
        default:
            return currentState;
    };
};

export default appReducer;