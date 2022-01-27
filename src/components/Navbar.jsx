import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="logo" href="#">ECO-VIS</a>
            <ul>
                <li><a target="_blank" href="https://econo-me.de">Econo-Me</a></li>
                <li><a href="#aufgaben1">Die Soziale Markwirtschaft</a></li>
                <li><a href="#aufgaben2">Aktuelle Lage</a></li>
                <li><a href="#aufgaben3">Erfolgssicht</a></li>
                <li><a href="#team">Über uns</a></li>
                <li><a href="#quellen">Unseren Quellen</a></li>
            </ul>
        </div>
    );
}

export default Navbar;