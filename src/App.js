import { computeHeadingLevel } from "@testing-library/react";
import { useState } from 'react'
import "./App.css";
import Allcontacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(Allcontacts.slice(0,5))
  console.log("contacts", contacts)

  //remaining could also be a state
  function addRandomContact() {
  const remaining = Allcontacts.filter(ar => !contacts.find(rm => (rm.name === ar.name)))
  const randomContact = remaining[Math.floor(Math.random()*remaining.length)];
  const newContacts = [...contacts, randomContact]
  setContacts(newContacts);
 }

 function sortByPopularity() {
  const newContacts = [...contacts].sort((a, b) => a.popularity < b.popularity)
  setContacts(newContacts);
 }

 function sortByName() {
  const newContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
  setContacts(newContacts);
 }

 function deleteContact(contact) {
  const idx = contacts.indexOf(contact)
  let newContacts = [...contacts]
  newContacts.splice(idx, 1);
  setContacts(newContacts);
 }

  return (
  <div className="App">
  <h1>IronContacts</h1>
  <button onClick={addRandomContact}>Add Random Contact</button>
  <button onClick={sortByPopularity}>Sort by popularity</button>
  <button onClick={sortByName}>Sort by name</button>

  <table>
  <thead>
  <tr>
     <th>Picture</th>
     <th>Name</th>
     <th>Popularity</th>
     <th>Won an Oscar</th>
     <th>Won an Emmy</th>
     <th>Actions</th>

  </tr>
  </thead>
   <tbody>
    {contacts.map(contact => (
      <tr>
          <td><img src={contact.pictureUrl} alt="profile"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? "🏆": ""}</td>
          <td>{contact.wonEmmy ? "🏆": ""}</td>
          <td><button onClick={() => deleteContact(contact)}>Delete</button></td>

      </tr>
    ))}       
    </tbody>
  </table>
  </div>
  );
}
export default App;