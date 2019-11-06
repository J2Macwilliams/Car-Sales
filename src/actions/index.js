export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES"

export const addFeatures = feature => {
    console.log('addFeature :', feature);
    return {
        type: ADD_FEATURES,
        payload: feature
    };
};

export const removeFeatures = feature => {
    console.log('removeFeature:', feature)
    return {
        type: REMOVE_FEATURES,
        payload: feature
    }
}