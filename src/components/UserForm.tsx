import * as React from 'react';
import  User  from './../Models/User';
import { useHistory, Route } from 'react-router-dom';

type UserFormState = {
  user: User
}
type UserFormProps = {
  submitText: string,
  setContacts:Function,
  match?:any,
  getContact?:Function
}

class UserForm extends React.Component<UserFormProps, UserFormState> {
  Contact:User;
  history: any;
  
  constructor(props) {
    super(props)

    let id = this.props.match.params.id;
    this.Contact = id==null?new User():this.props.getContact(id);
    this.state={user:this.Contact}; 
  }
  handleSubmit() {
    this.props.setContacts(this.Contact);
  }
  onInput(event: { target: { name: string; value: string; }; }) {
    const name:string=event.target.name;
    if(name=='name'){
      this.Contact.Name=event.target.value;
    }
    if(name=='email'){
      this.Contact.Email=event.target.value;
    }
    if(name=='phone'){
      this.Contact.Mobile=event.target.value;
    }
    if(name=='landline'){
      this.Contact.Landline=event.target.value;
    }
    if(name=='website'){
      this.Contact.Website=event.target.value;
    }
    if(name=='address'){
      this.Contact.Address=event.target.value;
    }
  }
  render() {
    return (
      <div id='col-70'>
      <div id='addForm'>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            defaultValue={this.state.user.Name}
            onChange={this.onInput.bind(this)}
            pattern="([a-zA-Z]+[ ]?)+[^ ]"
            title='Enter a valid Name'
            required
          />
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="abc@xyz.com"
            title='Enter a valid Email Address'
            defaultValue={this.state.user.Email}
            onChange={this.onInput.bind(this)}
            required
          />

          <div id='mobland'>
            <div id='left'>
            <label>Mobile *</label>
            <input
              type="text"
              name="phone"
              defaultValue={this.state.user.Mobile}
              pattern="([+][0-9]{1,3}[ ])?[0-9]{10}" 
              placeholder="+XX XXXXXXXXXX"              
              title='Mobile Number (Country Code is Optional) '
              onChange={this.onInput.bind(this)}
              required
            />
            </div>
            <div id='right'>
            <label>Landline</label>
            <input
              type="right"
              name="landline"
              pattern="([1-9]{2}[ ]){2}[0-9]{6,8}"
              defaultValue={this.state.user.Landline}
              onChange={this.onInput.bind(this)}
            />
            </div>
            </div>

          <label>Website*</label>
          <input
            type="text"
            name="website"
            placeholder="https://xyx.com"
            pattern="https?://[a-zA-z0-9]+[.]{1}[-a-zA-z0-9]+([.]{1}[a-zA-Z]{2,3}){1,3}"
            title='Your Own Website'
            defaultValue={this.state.user.Website}
            onChange={this.onInput.bind(this)}
            required
          />

          <label>Address</label>
          <textarea
            name="address"
            id='AddressTxtArea'
            defaultValue={this.state.user.Address}
            rows={5}
            onChange={this.onInput.bind(this)}
          />

          <CancelButton/>
          <button type="submit" id='form-button'>{this.props.submitText}</button>
        </form>
      </div>
      </div>
    );
  }
}
const CancelButton=()=>{
  const history=useHistory();
  return(
    <React.Fragment>
    <button type="button" id='form-button' onClick={() =>history.push('/') }>Cancel</button>
    </React.Fragment>
  );
}

export default UserForm;
