import * as React from 'react';
import User from 'Service/User';

type componentProps={
    user:User;
}
export default class ContactDetails extends React.Component<componentProps>{
    render(){
        return(
            <div id="info">
                <div id="showdata">
                <div id="username">{this.props.user.Name}</div>
                <br />
                <div><span> Email : </span><span id="usermailid">{this.props.user.Email}</span></div>
                <br />
                <div><span> Mobile : </span><span id="usermobile">{this.props.user.Mobile}</span></div>
                <div><span>Landline: </span> <span id="userlandline">{this.props.user.Landline}</span></div> <br />
                <div><span>Website:</span><span id="userwebsite">{this.props.user.Website}</span></div> <br />
                <div><span className="A">Address:</span> <span className="B" id="useraddress">{this.props.user.Address}</span></div>
                </div>
            </div>
        );
    }
}