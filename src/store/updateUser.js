const defaultState = {
    user: {
        name: '',
        age: '',
        gender: ''
    },
    profile: ''  //public или 'private'
}

const updateUser = (state = defaultState ,action)=> {
    switch (action.type){
        case 'UPDATE_USER':
            return{
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: action.payload
            };
        default:
            return state
    }
}
export default updateUser;

