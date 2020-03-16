import * as React from 'react';
import ContactPanel from "./ContactPanel";
import { Switch, Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import User from './../../Service/User';
import UserForm from './UserForm';
import {cloneDeep} from 'lodash';

type ContainerState={
Contacts:Array<User>
}
type ContainerProps={
    history?:any,
    match?:any
}
export default class Container extends React.Component<ContainerProps,ContainerState> {
    Contacts:Array<User>;
    constructor(props:ContainerProps){
        super(props);
        this.Contacts = new Array<User>();
        const u1:User =  new User();
        u1.id="1";u1.Address="";u1.Email="nahibanamail@kahi.pe.bhi";u1.Name="PapaNeNahiRakhaNaam";u1.Landline="GareebiBhotH";u1.Mobile="DostKaNumberDu";u1.Website="www.moogle.com";
        const u2:User =  new User();
        u2.id="2";u2.Address="";u2.Email="nahibanamail@kahi.pe.bhi";u2.Name="PapaNeNahiRakhaNaam";u2.Landline="GareebiBhotH";u2.Mobile="DostKaNumberDu";u2.Website="www.moogle.com";
        this.Contacts.push(u1,u2);

        this.state = {     
            Contacts:this.Contacts       
        };
    }
    setContacts(user:User)
    {
        if(user.id==undefined){
            user.id= this.Contacts.length+1+"";
            this.Contacts.push(user);
        }
        else{        
            this.Contacts.filter(c=>c.id)[0]=user;
        }
        this.setState({Contacts:this.Contacts});  
        this.props.history.push("/Userinfo/" + user.id.toString());     
    }
    getContact(id:string){
        return this.state.Contacts.filter(c=>c.id==id)[0];
    }
    Delete(id:string){
        this.Contacts=this.Contacts.filter(e=>e.id!=id);
        this.setState({Contacts:this.Contacts});
        this.props.history.push('/');
    }

    render() {
        return (
            <div id='container'>
                <ContactPanel Contacts={cloneDeep(this.state.Contacts)}></ContactPanel>
                <Switch>
                    <Route path='/Add' render={(props)=><UserForm {...props} setContacts={this.setContacts.bind(this)} submitText={"Add"}/>}/>
                    <Route path="/Edit/:id" render={(props)=><UserForm {...props} setContacts={this.setContacts.bind(this)} submitText={"Update"} getContact={this.getContact.bind(this)}/>}/>
                    <Route path='/Userinfo/:id' render={(props)=><UserInfo {...props} getContact={this.getContact.bind(this)} deleteContact={this.Delete.bind(this)}/>}/>
                    }/>
                    <Route exact path='/'  />
                </Switch>
                
            </div>
        );
    }
}