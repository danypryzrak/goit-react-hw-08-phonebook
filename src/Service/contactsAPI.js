import { instants } from "ApiSetup/ApiSetup";

export const fetchContacts = async () => {
    const { data } = await instants.get('/contacts');
    return data;
};

export const addContact = async (contact) => {
    const { data } = await instants.post('/contacts', contact);
    return data;
};

export const deleteContact = async (id) => {
    const { data } = await instants.delete(`/contacts/${id}`);
    return data;
};

