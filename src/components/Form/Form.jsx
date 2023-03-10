import css from './Form.module.css'
import { useState } from 'react'
import { Notify } from 'notiflix'
import { selectContacts } from 'redux/contacts/contactsSelector';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contactsThunk';


const Form = () => {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);    

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
    
function handleChange(event) {
    const { name, value } = event.target
    
    switch (name) {
    case "name":
    setName(value)
    break;

    case "number":
    setNumber(value)
    break;

    default:
    break
}
}
    
const handleSubmit = ({ name, number }) => {
    const contact = {
    name,
    number
    };
    dispatch(addContactThunk(contact));
};

function onSubmit(ev) {
    ev.preventDefault();
    if (
        contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()
        )
    ) {
        return Notify.warning('This contact is already in the list');
    }

    handleSubmit({ name, number });
    setName('')
    setNumber('')
}


        return (<>
            <form className={css.Form} onSubmit={onSubmit}>
                <h3 className={css.h3}>Here, you can add contact</h3>
                <label className={css.label}>
                    Name
                    <input className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleChange}
                        required />
                </label>
                <label className={css.label}>
                    Number
                    <input className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleChange}
                        required/>
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        </>
        )

}

export default Form
