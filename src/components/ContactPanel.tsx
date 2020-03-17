import * as React from "react";
import User from "../Models/User";
import { NavLink, Link } from "react-router-dom";
type ComponentProps = {
    Contacts: Array<User>
}
class Contactpanel extends React.Component<ComponentProps>{
    render() {
        let items = [] as any;
        let newArr: Array<User> = this.props.Contacts;
            items.push(newArr.map(e => 
            
            <li className='contact' key={e.id}>
                <NavLink to={"/UserInfo/" + e.id} activeClassName="selected"><span id='divname'>{e.Name}</span>
            <span id='divemail'>{e.Email}</span>
            <span id='divphone'>{e.Mobile}</span></NavLink></li>));
        return (
            <div id="col-30">
                <div id="d1">
                    <p id="p1">Contacts</p>
                </div>
                <ul id="contactpanel">
                    {items}
                </ul>
            </div>

        );
    }
}
export default Contactpanel;