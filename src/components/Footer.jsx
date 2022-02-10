import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div><p>2022 © Paul März</p> <a href="https://econo-me.de">Econo-Me</a> <a onClick={() => {
        alert("ACHTUNG!\nSie sind im Begriff mit mir in Kontakt zu treten!\n~ Paul März")
      }} href="mailto:maerzpaul06@gmail.com">Contact</a> <a  href="https://github.com/PaulusDeGross/eco-vis-final">Source</a></div>
    </div>
  );
};

export default Footer;