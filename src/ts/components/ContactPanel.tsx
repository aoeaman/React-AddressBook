import * as React from "react";
import User from "Service/User";
import { NavLink, Link } from "react-router-dom";
type ComponentProps = {
    Contacts: Array<User>
}
class Contactpanel extends React.Component<ComponentProps>{
    render() {
        let items = [] as any;
        let newArr: Array<User> = this.props.Contacts;
        items.push(newArr.map(e => <Link to={"/UserInfo/" + e.id} ><div className='contact' key={e.id} tabIndex={Number(e.id)}><div id='divname'>{e.Name}</div>
            <div id='divemail'>{e.Email}</div>
            <div id='divphone'>{e.Mobile}</div></div></Link>));
        return (
            <div id="col-30">
                <div id="d1">
                    <p id="p1">Contacts</p>
                </div>
                <div id="contactpanel">
                    {items}
                </div>
            </div>

        );
    }
}
export default Contactpanel;