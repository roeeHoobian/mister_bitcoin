import ContactService from "../../services/ContactService"


//action dispatcher
export function loadContacts(filterBy) {
    return async dispatch => {
        const contacts = await ContactService.getContacts(filterBy)
        dispatch({ type: 'SET_CONTACTS', contacts })
    }
}