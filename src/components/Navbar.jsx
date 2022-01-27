import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="logo" href="#welcome">ECO-VIS</a>
            <ul>
                <li><a target="_blank" href="https://econo-me.de">Econo-Me</a></li>
                <li><a href="#team">Über uns</a></li>
                <li><a href="#quellen">Unseren Quellen</a></li>
            </ul>
        </div>
    );
}

export default Navbar;