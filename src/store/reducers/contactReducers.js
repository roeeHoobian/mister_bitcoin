
const INITIAL_STATE = {
    contacts:[]
}

export function contactReducer(state = INITIAL_STATE, action ){
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }    
        case 'SET_FILTER':
            return {
                ...state,
                contacts: action.contacts
            }    
        default:
            return state
    }
}