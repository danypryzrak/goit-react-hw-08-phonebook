import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contactsSelector';
import { FILTER } from 'redux/contacts/filterSlice';
import css from './Filter.module.css'



const Filter = () => {

  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);

  const handleFilter = ev => {
    const { value } = ev.target;
    dispatch(FILTER(value.trim()));
  };

  return (
    <div className={css.filter}>
    <label name="filter" className={css.label}>
      <span className=''>You can find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filtered}
        onChange={handleFilter}
        className={css.input}
      />
      </label>
    </div>
  );
};

export default Filter;
