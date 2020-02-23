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
                    {
                        ...action.payload
                    }

                ]
            };

        case 'UPDATE_TOTALHOURS':
            const newActivities = currentState.activities.map((activity) => {
                if(activity.id === action.payload.id){
                    return {
                        ...activity,
                        logHours: action.payload.logHours
                    }
                }
                return {
                   ...activity,
                   logHours: activity.logHours || 0
                };
            });

            return {
                ...currentState,
                activities: [
                    ...newActivities
                ],
                totalHours : newActivities.reduce( function(tot, b) { return tot + b.logHours; }, 0)
            };

        default: 
            return currentState;
    };
};

export default activityReducer;
