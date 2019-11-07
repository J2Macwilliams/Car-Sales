export const BUY = 'BUY'
export const REMOVE_FEATURES = 'REMOVE_FEATURES'

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