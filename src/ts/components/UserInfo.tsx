import * as React from 'react';
import ContactDetails from './ContactDetails';
import User from 'Service/User';
import { Link } from 'react-router-dom';

type ContainerProps={
    history?:any,
    match?:any,
    getContact:Function
    deleteContact:Function
}
export default class UserInfo extends React.Component<ContainerProps>{
    contact:User;

    render(){
        let id=this.props.match.params.id;
        return(
            <div id='col-70'>
            <ContactDetails user={this.props.getContact(id)}/>
            <div id="options">
                    <Link to={'/Edit/'+id}  ><img className="img" src="../../../Public/images/edit1.jpg" /> Edit</Link>
                    <Link to='/Delete' onClick={()=>this.props.deleteContact(id)}><img className="img" src="../../../Public/images/delete2.png" /> Delete</Link>
                </div> 
            </div>
        );
    }
}