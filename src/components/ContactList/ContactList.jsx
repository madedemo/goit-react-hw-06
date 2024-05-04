import css from './ContactList.module.css';
import Contact from "../Contact/Contact";


const ContactList = ({ users, onUserDelete }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(users) &&
          users.map((user) => {
            return (
              <Contact key={user.id} user={user} onUserDelete={onUserDelete} />
            );
          })}
      </ul>
    </div>
  );
};


export default ContactList;