import * as React from 'react';
import  User  from './../../Service/User';
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
  flag:boolean;
  
  constructor(props) {
    super(props)
    let id = this.props.match.params.id;
    this.Contact = id==null?new User():this.props.getContact(id);
    this.state={user:this.Contact}
    this.flag=false  
  }


  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.state;
    this.props.setContacts(user);
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
        <form className='form'>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            defaultValue={this.state.user.Name}
            onChange={this.onInput.bind(this)}
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            defaultValue={this.state.user.Email}
            onChange={this.onInput.bind(this)}
          />

          <div id='mobland'>
            <div id='left'>
            <label>Mobile *</label>
            <input
              type="tel"
              name="phone"
              defaultValue={this.state.user.Mobile}
              onChange={this.onInput.bind(this)}
            />
            </div>
            <div id='right'>
            <label>Landline</label>
            <input
              type="right"
              name="landline"
              defaultValue={this.state.user.Landline}
              onChange={this.onInput.bind(this)}
            />
            </div>
            </div>

          <label>Website</label>
          <input
            type="url"
            name="website"
            defaultValue={this.state.user.Website}
            onChange={this.onInput.bind(this)}
          />

          <label>Address</label>
          <textarea
            name="address"
            id='AddressTxtArea'
            defaultValue={this.state.user.Address}
            rows={5}
            onChange={this.onInput.bind(this)}
          />

          <button type="button" onClick={this.handleSubmit.bind(this)} id='form-button'>{this.props.submitText}</button>
        </form>
      </div>
      </div>
    );
  }
}

export default UserForm;
