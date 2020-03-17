import * as React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
      <div id="navbar">
      <ul className="navbaritems">
        <li>
         <Link to='/'>Home</Link> 
        </li>
        <li>
        <Link to='/Add'>+Add</Link> 
        </li>
      </ul>
      <div id='Bing-Icon'>
          <img src="../../Public/images/bing.png" />
        </div>
      </div>
    );
}
