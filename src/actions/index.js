export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES"

export const addFeatures = payload => {
    console.log('addFeature :', feature);
    return {
        type: ADD_FEATURES,
        payload
    };
};

export const removeFeatures = payload => {
    console.log('removeFeature:', feature)
    return {
        type: REMOVE_FEATURES,
        payload
    }
}