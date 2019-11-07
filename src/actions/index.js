export const buy = item => {
    return {
        type: 'BUY',
        payload: item
    };
};

export const remove = item => {
    return {
        type: 'REMOVE_FEATURES',
        payload: item
    }
}