import css from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(user.id));
  }
  return (
    <div className={css.contactContainer}>
      <li className={css.contactItem}>
        <p className={css.userdata}>
          <FaUserLarge />
          {user.name}
        </p>
        <p className={css.userdata}>
          <FaPhoneAlt />
          {user.number}
        </p>
      </li>
      <button
        className={css.button}
        type="button"
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Contact;
