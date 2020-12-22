import ContactService from "../../services/ContactService"


//action dispatcher
export function loadContacts(filterBy) {
    return async dispatch => {
        const contacts = await ContactService.getContacts(filterBy)
        console.log('contacts', contacts);
        dispatch({ type: 'SET_CONTACTS', contacts })
    }
}