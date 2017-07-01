import React, {Component} from 'react';

class ContactItem extends Component{
  //constructor
  constructor() {
     super();
     this.state = {
        editing: false
     }
  }

//ON save function
onSave() {
 //console.log(this.refs.newName.value,this.refs.newEmail.value,this.refs.newPhone.value);
 //Pass on props from parents component
 this.props.updateContacts(this.refs.newName.value,this.refs.newEmail.value,this.refs.newPhone.value, this.props.index);
// set state back to editing false.
 this.setState({editing: false})
}
//On editing function
onEdit() {
   this.setState({ editing: true})
}

//On cancel
onCancel() {
  this.setState({ editing: false})
}
 //Render form function
 renderForm() {
     return(
       <tr>
         <td><input type="text" ref="newName" className="form-control" defaultValue={this.props.contact.name}  /></td>
         <td><input type="text" ref="newEmail" className="form-control" defaultValue={this.props.contact.email}  /></td>
         <td><input type="text" ref="newPhone" className="form-control" defaultValue={this.props.contact.phone}  /></td>
         <td><button onClick={this.onSave.bind(this)} className="btn btn-primary">save</button></td>
         <td><button onClick={this.onCancel.bind(this)} className="btn btn-danger">cancel</button></td>
       </tr>
     );
 }

 //Render item function
 renderItem() {
   return(
   <tr>
     <td>{this.props.contact.name}</td>
     <td>{this.props.contact.email}</td>
     <td>{this.props.contact.phone}</td>
     <td><button onClick={this.onEdit.bind(this)} className="btn btn-success">Edit</button></td>
     <td><button onClick={this.onDelete.bind(this)} className="btn btn-danger">Delete</button></td>
   </tr>
 );
 }
  //On delete function
  onDelete() {
    console.log("deleting");
    this.props.deleteContacts(this.props.index);
  }
    render() {
       return(
       <tbody>
        {
          this.state.editing ? this.renderForm() : this.renderItem()
        }
     </tbody>
       )
    }
}

export default ContactItem;
