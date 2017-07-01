/**
 *   Created by karhik
 *   Date: 4/5/2017
 *   App name: contactslist app
 */

import React, { Component } from 'react';
import ContactItem from './components/ContactItem';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends Component {
  //constructor
  constructor() {
     super();
     this.state = {
        contacts: [
           {
               name: "karthik",
               email: "karthik@gmail.com",
               phone: "111-111-1111"
           },
           {
               name: "Vikas",
               email: "vikas@gmail.com",
               phone: "222-222-2222"
           },
           {
               name: "Ravi",
               email: "ravi@gmail.com",
               phone: "33-333-3333"
           },
        ]
     }
  }

//Add contacts
//Passon the parameters name,email and phone to the add function
addContacts(name,email,phone) {
   var contacts = this.state.contacts;
   //push the data to contacts array
   contacts.push({
      name,
      email,
      phone
   })
   //Set the new   state of contacts
   this.setState({ contacts: contacts})
}

//Update contacts
updateContacts(newName,newEmail,newPhone, i) {
  console.log(i, newName,newEmail,newPhone);
  var contacts = this.state.contacts;
  //Edit single contact
  var contact = contacts[i];
  //Change input fields with new values
  contact['name'] = newName;
  contact['email'] = newEmail;
  contact['phone'] = newPhone;
  //Set new state
  this.setState({ contacts})
}
//Delete contacts
deleteContacts(i) {
  console.log(i);
   var contact = this.state.contacts;
   //Use js splice method to splice the array
   contact.splice(i ,1);
   //Set new state
   this.setState({contacts: contact})
}

  render() {
    return (
      <div className="container">
        <div className="row">
         <div className="col-md-12">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
             <a href="" className="navbar-brand">Contactlist </a>
            </div>
          </nav>
         </div>
         <div className="col-md-12">
          <ContactForm  addContacts={this.addContacts.bind(this)} />
         </div>
         <div className="col-md-12">
           <table className="table">
            <thead>
             <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Actions</th>
             </tr>
            </thead>
            {
                this.state.contacts.map( (contact, i) => {
                  return <ContactItem contact={contact} key={i} index={i} updateContacts={this.updateContacts.bind(this)}  deleteContacts={this.deleteContacts.bind(this)}  />
                })
            }
         </table>
         </div>
         <div className="col-md-12">
          <p className="footer  text-muted">Copyright &copy; 2017 @ kathikhacker</p>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
