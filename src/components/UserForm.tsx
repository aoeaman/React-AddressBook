import * as React from 'react';
import User from './../Models/User';
import { useHistory, Route } from 'react-router-dom';
import { cloneDeep } from 'lodash';

type UserFormState = {
  user: User
}
type UserFormProps = {
  submitText: string,
  setContacts: Function,
  match?: any,
  getContact?: Function
}

class UserForm extends React.Component<UserFormProps, UserFormState> {
  history: any;

  constructor(props) {
    super(props)

    let id = this.props.match.params.id;
    // this.Contact = id == null ? new User() : this.props.getContact(id);
    this.state = { user: id == null ? new User() : this.props.getContact(id) };
  }

  componentWillReceiveProps(prevProps: UserFormProps) {
    let id = this.props.match.params.id;
    let pid = prevProps.match.params.id;
    debugger;
    if (id != pid) {
      this.setState({
        user: new User()
      });
    }
  }
  handleSubmit() {
    this.props.setContacts(this.state.user);
  }
  onInput(event: { target: { name: string; value: string; }; }) {
    const name: string = event.target.name;
    var user = cloneDeep(this.state.user);
    if (name == 'name') {
      user.Name = event.target.value;
      this.setState({ user });
    }
    if (name == 'email') {
      user.Email = event.target.value;
      this.setState({ user });
    }
    if (name == 'phone') {
      user.Mobile = event.target.value;
      this.setState({ user });
    }
    if (name == 'landline') {
      user.Landline = event.target.value;
      this.setState({ user });;
    }
    if (name == 'website') {
      user.Website = event.target.value;
      this.setState({ user });
    }
    if (name == 'address') {
      user.Address = event.target.value;
      this.setState({ user });
    }
  }
  render() {
    return (
      <div id='Col-70'>
        <div id='addForm'>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={this.state.user.Name}
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
              value={this.state.user.Email}
              onChange={this.onInput.bind(this)}
              required
            />

            <div id='mobland'>
              <div className='left'>
                <label>Mobile *</label>
                <input
                  type="text"
                  name="phone"
                  value={this.state.user.Mobile}
                  pattern="([+][0-9]{1,3}[ ])?[0-9]{10}"
                  placeholder="+XX XXXXXXXXXX"
                  title='Mobile Number (Country Code is Optional) '
                  onChange={this.onInput.bind(this)}
                  required
                />
              </div>
              <div className='right'>
                <label>Landline</label>
                <input
                  type="right"
                  name="landline"
                  pattern="([1-9]{2}[ ]){2}[0-9]{6,8}"
                  value={this.state.user.Landline}
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
              value={this.state.user.Website}
              onChange={this.onInput.bind(this)}
              required
            />

            <label>Address</label>
            <textarea
              name="address"
              id='AddressTxtArea'
              value={this.state.user.Address}
              rows={5}
              onChange={this.onInput.bind(this)}
            />

            <CancelButton />
            <button type="submit" id='form-button'>{this.props.submitText}</button>
          </form>
        </div>
      </div>
    );
  }
}
const CancelButton = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <button type="button" id='form-button' onClick={() => history.push('/')}>Cancel</button>
    </React.Fragment>
  );
}

export default UserForm;
