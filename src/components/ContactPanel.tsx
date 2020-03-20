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
            
            <li className='Contact' key={e.id}>
                <NavLink to={"/UserInfo/" + e.id} activeClassName="Selected_Contact"><span className='name'>{e.Name}</span>
            <span className='email'>{e.Email}</span>
            <span className='phone'>{e.Mobile}</span></NavLink></li>));
        return (
            <div id="Col-30">
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