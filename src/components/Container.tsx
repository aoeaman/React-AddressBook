import * as React from 'react';
import ContactPanel from "./ContactPanel";
import { Switch, Route, Redirect } from 'react-router-dom';
import UserInfo from './UserInfo';
import User from './../Models/User';
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
    userID:number
    constructor(props:ContainerProps){
        super(props);
        this.userID=2;
        this.Contacts = new Array<User>();

        const u1:User =  new User();
        u1.id="1";u1.Address="Ye Galiyan Ye chaubara Yha Aana Na Doabara Ab hum to bahe pardesi ke tera yha koin nhi";u1.Email="nahibanamail@kahi.pe.bhi";u1.Name="PapaNeNahiRakhaNaam";u1.Landline="GareebiBhotH";u1.Mobile="DostKaNumberDu";u1.Website="www.moogle.com";
        const u2:User =  new User();
        u2.id="2";u2.Address="";u2.Email="nahibanamail@kahi.pe.bhi";u2.Name="PapaNeNahiRakhaNaam";u2.Landline="";u2.Mobile="DostKaNumberDu";u2.Website="https://www.moogle.com";
        this.Contacts.push(u1,u2);

        this.state = {     
            Contacts:this.Contacts       
        };
    }
    setContacts(user:User)
    {
        if(user.id==undefined){
            user.id= (++this.userID).toString();
            this.Contacts.push(user);
        }
        else{        
            var index =  this.Contacts.indexOf (this.Contacts.filter(x=>x.id==user.id)[0])
            this.Contacts[index] = user; 
        }
        this.setState({Contacts:this.Contacts});  
        this.props.history.push("/Userinfo/" + user.id.toString());     
    }
    getContact(id:string){
        return cloneDeep(this.state.Contacts.filter(c=>c.id==id)[0]);
    }
    Delete(id:string){
        this.Contacts=this.Contacts.filter(e=>e.id!=id);
        this.setState({Contacts:this.Contacts});

    }
    Nextlink(id){
        if(this.Contacts.length==1){
            return '/';
        }
        else{      
            const index =  this.Contacts.indexOf (this.Contacts.filter(x=>x.id==id)[0])     
            if(this.Contacts.length != Number(index+1))
            return`/Userinfo/${this.Contacts[index+1].id}`;
            else
            return `/Userinfo/${this.Contacts[index-1].id}`;
        }
    }

    render() {
        return (
            <div id='container'>
                <ContactPanel Contacts={(this.state.Contacts)}></ContactPanel>
                <Switch>
                    <Route path='/Add' component={(props)=><UserForm {...props} setContacts={this.setContacts.bind(this)} submitText={"Add"}/>}/>
                    <Route path="/Edit/:id" component={(props)=><UserForm {...props} setContacts={this.setContacts.bind(this)} submitText={"Update"} getContact={this.getContact.bind(this)}/>}/>
                    <Route path='/Userinfo/:id' component={(props)=><UserInfo {...props} getContact={this.getContact.bind(this)} deleteContact={this.Delete.bind(this)} NextLink={this.Nextlink.bind(this)}/>}/>
                </Switch>
                
            </div>
        );
    }
}