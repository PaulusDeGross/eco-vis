import React from 'react';

const Sources = () => {
    return (
        <>
            <h1 className="header">Unsere Quellen</h1>
            <ul className="source-list">
                <li><a onClick={() => {
        alert("ACHTUNG!\nSie werden nun weitergeleitet!")
      }} href="https://www.wirtschaftundschule.de/">Wirtschaft und Schule</a></li>
                <li><a onClick={() => {
        alert("ACHTUNG!\nSie werden nun weitergeleitet!")
      }} href="https://www.insm.de/">Initiative Neue Soziale Markwirtschaft</a></li>
                <li><a onClick={() => {
        alert("ACHTUNG!\nSie werden nun weitergeleitet!")
      }} href="https://econo-me.de/?gclid=Cj0KCQiAraSPBhDuARIsAM3Js4pNuvie_Xfk-kc4PnQ6Le85uCSs0xJTJcTz24yBOwHRKt3c_pJNaB8aAk3yEALw_wcB">Econo-Me</a></li>
                <li><a onClick={() => {
        alert("ACHTUNG!\nEs wird nun der Unterrichtsmitschrieb heruntergeladen!\n~ Paul März")
      }} href="../../res" download="unterricht.pdf">Der Wirtschaftsunterricht<br /> in der Schule</a></li>
            </ul>
        </>
    );
};

export default Sources;