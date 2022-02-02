import React from 'react';
import arrow from './img/arrow.svg';

const Assignment1 = () => {
    return (
        <>
            <h1 className="header" id="#aufgaben1">In welcher Wirtschaftswelt wollen wir leben?</h1>
            <h2 className="header">"Soziale Marktwirtschaft"</h2>
            <div className="assign border-b aufgabe1" id="aufgabe1">
                <p className="assign">
                    In vielerlei Ansicht unterscheidet dich die soziale Marktwirtschaft erheblich von den Wirtschaftssystemen anderer Länder, wie zum Beispiel der Planwirtschaft und der freien Marktwirtschaft. 
                    Mit der freien Marktwirtschaft sind große Probleme verbunden, denn es gibt keine Regeln, die Unrecht verhindern und beispielsweise davor schützen, missbraucht und ausgenutzt zu werden, weshalb sich die soziale Marktwirtschaft entwickelte. 
                    Im Gegensatz zur freien Marktwirtschaft greift der Staat in die soziale Marktwirtschaft ein, um Ungleichheiten zu bekämpfen.
                    Im Gegensatz zur Planwirtschaft, in der ein Zentrum alles entscheidet, schafft die soziale Marktwirtschaft einen Rahmen, in dem sich die Menschen mit Ihren Entscheidungen frei bewegen dürfen. 
                    Ihr Grundelement ist die Verbindung des Prinzips der Freiheit auf dem Markt mit dem des sozialen Ausgleichs.
                </p>
                <ul>
                    <h3 className="header left">Die Grundeigenschaften der sozialen Marktwirtschaft</h3>
                    <li className="center">Sie verbindet die Effizienz der Marktwirtschaft mit Gleichberechtigung</li>
                    <li className="center">Spielt eine wichtige Rolle bei der Festlegung von Regeln für Unternehmen</li>
                    <li className="center">Damit Sie funktionieren kann, muss es Privateigentum geben</li>
                    <li className="center">Es muss einen Markt geben, auf dem ohne staatlichen Eingriffe frei gehandelt werden kann</li>
                    <li className="center">Es gibt einen freien Wettbewerb</li>
                    <li className="center">Es herrscht Konsumfreiheit - man kann wählen, was man wo kauft</li>
                    <li className="center">Die Verantwortung des Staates hat Grenzen</li>
                    <li className="center">Sie sucht immer nach einer neuen Balance zwischen staatlicher Intervention und individueller Freiheit, einschließlich wirtschaftlicher Freiheit</li>
                    <li className="center">Sie ist kein starres Konzept, sondern ein offenes System</li>
                    <li className="center">Der Ablauf der Wirtschaft wird durch die Art und der Menge der nachgefragten Waren und Dienstleistungen bestimmt</li>
                    <li className="center">Digitalisierung, demografische Entwicklung und Klimawandel erfordern eine Erneuerung der Sozialen Marktwirtschaft</li>
                </ul>
                <div className="arrow">
                    <img src={arrow} className="arrow__img" alt="arrow" />
                    <p className="arrow__p">Der Kerngedanke der Sozialen Marktwirtschaft ist, dass eine funktionierende Wirtschaft nicht von selbst entsteht, sondern vom Staat geschaffen und aufrechterhalten werden muss.</p>
                </div>
                <p className="assign">
                    Die soziale Marktwirtschaft wurde erstmals von Alfred Müller-Armack vor Rund 70 Jahren erwähnt. 
                    Er entwarf die Soziale Marktwirtschaft als „dritte Form“ neben rein liberaler Marktwirtschaft und staatlicher Wirtschaftslenkung. 
                    Vor Allem weil es in dieser Generation überwälzende Veränderungen durch, zum Beispiel den Sektorenwandel, gibt, müssen einige Werte der sozialen Marktwirtschaft umgepolt werden. Im nächsten Absatz können Sie genau dies nachlesen, und wie unsere Generation auf weitere interessante wirtschaftliche Fragen antwortet.
                </p>
            </div >
        </>
  );
};

export default Assignment1;
