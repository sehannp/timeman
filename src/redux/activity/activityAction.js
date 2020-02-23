export const addActivity = activity => ({
    type: 'ADD_ACTIVITY',
    payload: activity
})

export const updateTotalHours = totals => ({
    type: 'UPDATE_TOTALHOURS',
    payload: totals
})