import { FormPhone } from './formPhoneBook/formPhoneBook';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';


export const App = () => {


  return (
    <div>
      <FormPhone />
      <Filter  />
      <ContactList  />
    </div>
  );
};
