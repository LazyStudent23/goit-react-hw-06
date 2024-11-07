import {useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";

import styles from "./ContactList.module.css";
import { selectContacts } from "../redux/contactsSlice/contactsSlice.js";
import { selectFilters } from "../redux/filtersSlice/filtersSlice.js";


const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filters = useSelector(selectFilters)
   const searchedContacts = contacts.filter((user) =>
     user.name.toLowerCase().includes(filters.toLowerCase().trim())
  );
  
  return (
    <>
      {searchedContacts.length === 0 && <h3>Your contact list is empty</h3>}

      <ul className={styles.user_list}>
        {searchedContacts.map((user) => {
          return (
            <li className={styles.user_card} key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
