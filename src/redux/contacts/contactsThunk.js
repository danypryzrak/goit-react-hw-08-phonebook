import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "Service/contactsAPI"


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
        return await fetchContacts()
        } catch (error) {
        return rejectWithValue(error)
        }
    })

export const addContactThunk = createAsyncThunk('contacts/addContact',
    async (id, { rejectWithValue }) => {
        try {
            return await addContact(id)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            return await deleteContact(id)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

