import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';

import styles from './ContactItem.module.scss';

// Принимает один контакт и метод для удаления контакта
const ContactItem = ({ contact, onDeleteContact }) => {
  const onDelete = () => onDeleteContact(contact.id);

  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}</span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>

      <IconButton onClick={onDelete} aria-label="Delete contact">
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </IconButton>
    </li>
  );
};

export default ContactItem;
