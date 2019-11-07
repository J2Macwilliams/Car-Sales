export const buy = item => {
    return {
        type: 'BUY',
        payload: item
    };
};

export const removeFeature = item => {
    return {
        type: 'REMOVE_FEATURES',
        payload: item
    }
}