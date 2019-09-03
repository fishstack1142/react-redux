export default (state, action) => {
    
    // console.log("state : : : " + state);
    console.log(action);
    // return state;


    switch (action.type) {
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech: action.tech
            };

        case "SET_NUMBER":
            return {
                ...state,
                tech: action.tech
            };

        default:
            return state;
    }
};