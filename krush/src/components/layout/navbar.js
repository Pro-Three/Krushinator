import React from 'react';
import 'materialize-css';


const Navbar = () => {
    return (
        <div>
        <nav>
            {/* PRE-LOGIN...? */}

            {/* AFTER LOGIN */}
            <div class="nav-wrapper">
            <a href="/" class="brand-logo">AstroLove</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/chats">Chats</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar