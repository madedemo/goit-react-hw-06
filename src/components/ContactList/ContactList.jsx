import css from './ContactList.module.css';
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";



const ContactList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredUsers) &&
          filteredUsers.map((user) => {
            return (
              <Contact key={user.id} user={user} onUserDelete={handleDelete} />
            );
          })}
      </ul>
    </div>
  );
};


export default ContactList;