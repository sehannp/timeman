const INITIAL_STATE = {
    activities : [],
    totalHours : 0
}

const activityReducer = (currentState=INITIAL_STATE,action) => {
    switch(action.type){
        case 'ADD_ACTIVITY':
            return {
                ...currentState,
                activities : [
                    ...currentState.activities,
                    action.payload
                ]
            };
        case 'UPDATE_TOTALHOURS':
            return {
                ...currentState,
                totalHours : action.payload
            };
        default: 
            return currentState;
    };
};

export default activityReducer;
