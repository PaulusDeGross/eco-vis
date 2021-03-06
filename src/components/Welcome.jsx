import React from 'react';

const Welcome = () => {
  return (
    <div className="border-b">
      <h1 class="header" id="welcome">Wilkommen!</h1>
      <p>
        Das Team und ich heißen Sie Herzlich Wilkommen!<br />
        Auf dieser Internetseite finden Sie die Ergebnisse der Bearbeitung der Aufgaben.<br />
        Und ohne Sie jetzt noch länger aufzuhalten,<br />
        <span className="logo">Viel Spaß</span><br />
        ~ Paul März und das gesamte Eco-Vis Team
      </p>
    </div>
  );
};

export default Welcome;