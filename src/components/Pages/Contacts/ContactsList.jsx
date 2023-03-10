import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contacts/contactsThunk';
import css from './Contacts.module.css'

const ContactsList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    useEffect(() => {
    dispatch(fetchContactsThunk())
    }, [dispatch])
    
    
return (
    <>
        <Form />
        <Filter />
    <ul className={css.ul}>
        {contacts.length ? (
        contacts.map(contact => (
            <li key={contact.id} className={css.li}>
            <p>
                <span>{contact.name} : {contact.number}</span>
            </p>
            <button
                type="button"
                onClick={() => dispatch(deleteContactThunk(contact.id))}
                className={css.button}
            >
                Delete
            </button>
            </li>
        ))
        ) : (
        <p>There are no contacts here</p>
        )}
    </ul>
    </>
);
};

export default ContactsList

