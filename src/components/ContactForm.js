import React, {Component} from 'react';

class ContactForm extends Component{
  //ON submit function
  onSubmit(e) {
    e.preventDefault();
    console.log("You clicked !");
    //Declare form values
    const myName = this.refs.myName.value;
    const myEmail = this.refs.myEmail.value;
    const myPhone = this.refs.myPhone.value;
    //Form  validation
    if(!myName && !myEmail && !myPhone){
       alert("Enter some text");
    }else{
      console.log(this.props.addContacts);
      // pass the props from parent component
      this.props.addContacts(myName,myEmail,myPhone);
      //clear text fields
      this.refs.myName.value = '';
      this.refs.myEmail.value = '';
      this.refs.myPhone.value = '';
    }
  }
    render() {
       return(
         <form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
              <div className="form-group">
                <input type="text" ref="myName" className="form-control" placeholder="Name"  />
              </div>
              <div className="form-group">
                 <input type="text" ref="myEmail" className="form-control" placeholder="Email"  />
              </div>
              <div className="form-group">
                 <input type="text" ref="myPhone" className="form-control" placeholder="Phone"  />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Add contacts</button>
              </div>
         </form>
       )
    }
}

export default ContactForm;
