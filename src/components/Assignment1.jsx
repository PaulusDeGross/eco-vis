import React from 'react';
import arrow from './img/arrow.svg';

const Assignment1 = () => {
    return (
        <>
            <h1 className="header" id="aufgabe1">In welcher Wirtschaftswelt wollen wir leben?</h1>
            
            <div className="assign border-b aufgabe1">
                <h2 className="header">"Soziale Marktwirtschaft"</h2>
                <p className="assign">
                    In vielerlei Ansicht unterscheidet sich die soziale Marktwirtschaft erheblich von den Wirtschaftssystemen anderer Länder, wie zum Beispiel der Planwirtschaft und der freien Marktwirtschaft. 
                    Mit der freien Marktwirtschaft sind große Probleme verbunden, denn es gibt keine Regeln, die Unrecht verhindern und beispielsweise davor schützen, missbraucht und ausgenutzt zu werden, weshalb sich die soziale Marktwirtschaft entwickelte. 
                    Im Gegensatz zur freien Marktwirtschaft greift der Staat in die soziale Marktwirtschaft ein, um Ungleichheiten zu bekämpfen.
                    Gegensätzlich zur Planwirtschaft, in der ein Zentrum alles entscheidet, schafft die soziale Marktwirtschaft einen Rahmen, in dem sich die Menschen mit Ihren Entscheidungen frei bewegen dürfen. 
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
                    Die soziale Marktwirtschaft wurde erstmals von Alfred Müller-Armack vor Rund <span className="highlight">70</span> Jahren erwähnt. 
                    Er entwarf die Soziale Marktwirtschaft als „dritte Form“ neben rein liberaler Marktwirtschaft und staatlicher Wirtschaftslenkung. 
                    Vor Allem weil es in dieser Generation überwälzende Veränderungen durch, zum Beispiel den Sektorenwandel, gibt, müssen einige Werte der sozialen Marktwirtschaft umgepolt werden. Im nächsten Absatz können Sie genau dies nachlesen, und wie unsere Generation auf weitere interessante wirtschaftliche Fragen antwortet.
                </p>
            </div >
            <div className="assign border-b aufgabe2" id="aufgabe2">
                <h2 className="header">Die Umfrage</h2>
                <p className="assign">
                    Die Frage "Welche Probleme gibt es an Unserer Marktwirtschaft?", kann unser Team natürlich beantworten, jedoch haben wir Uns dazu entschieden möglichst viele Meinungen in unserer Website zu vertreten. Deshalb haben Wir eine Umfrage gestartet, bei denen viele Schülerinnen und Schüler der Ober- und Mittelstufe unseres Gymnasiums auf folgende Fragen antworteten: 
                </p>
                <ul>
                    <li className="center"><span className="highlight">1.</span> Was ist euch an Unserer Marktwirtschaft am Wichtigsten?</li>
                    <li className="center"><span className="highlight">2.</span> Was könnte man verbessern?</li>
                    <li className="center"><span className="highlight">3.</span> Wie könnte man dies erreichen?</li>
                    <li className="center"><span className="highlight">4.</span> Wie könnte die Soziale Marktwirtschaft in Zukunft aussehen?</li>
                </ul>
                <p className="assign">
                    Auf die erste Frage antworteten über <span className="highlight">2/3</span> der Befragten mit "Die soziale Absicherung ist mir am Wichtigsten." Vor Allem im Krankheits- oder Kündigungsfall fühlen Sie sich vom Staat abgesichert und geschützt, was darauf schließen lässt, dass die Schüler*innen schon jetzt im Alter von <span className="highlight">15-18</span> in die Zukunft vorausschauend nachdenken. 
                    Bei den eher jüngeren Schülern liegt die Antwort "Das breite Angebot der Berufe gefällt mir gut. Dass Ich selbst entscheiden kann, was Ich werden will" auf der Nummer eins. 
                    Außerdem wurde noch die Konsumfreiheit und das große Angebot an verschiedensten Gütern erwähnt.
                </p>
                <p className="assign">
                    Auf die zweite Frage, welche Mangel es an der sozialen Marktwirtschaft gibt, beziehungsweise was verbessert werden kann, meinten rund <span className="highlight">40%</span> der Schüler, dass die Arbeitslosigkeit unbedingt entgegengewirkt werden soll. Dies könne man mithilfe von den richtigen Investitionen schaffen (Frage <span className="highlight">3</span> "Wie kann man dies erreichen?") 
                    Außerdem antworteten die Schüler relativ häufig, dass der Staat das Schulsystem nochmals überdenken sollte. Zitat: "Das Deutsche Schulsystem ist echt am A****. Es geht nur noch um die Bewertung und nicht mehr um die Bildung." Einige schlugen als Lösungsvorschlag das Wahlrecht ab <span className="highlight">16</span> vor, damit die Interessen der Schüler mehr im Bundestags vertreten wird.
                </p>
                <p className="assign">
                    Neben "Die Verschlafene Energiewende sollte man unbedingt nachholen" und "die Schere zwischen Arm und Reich ist ziemlich groß, das ist ein großes Problem", gab es eine Antwort, die wir als Team noch gerne aufführen wollen. Vor Allem in der Corona Zeit brauchten wir so viele Pflegekräfte wie noch nie. Auch durch die Impfpflicht im Pflegedienst haben wir einige davon verloren. Die Antwort zur Frage, was unbedingt an unserer Sozialmarktwirtschaft verändert werden soll, war hier "Einige Berufe sind so unterbezahlt, dass kaum Leute diese ausüben wollen. Auch Berufe, die man dringend braucht, werden von der heutigen Gesellschaft so schlecht gesehen (z.B Reinigungskräfte), was echt schlimm ist. Das muss man ändern". Um dies zu erreichen wäre ein komplettes Umdenken bei den Menschen nötig. Ein weiterer Lösungsvorschlag wären zu Einen  gerechte Löhne, aber auch nötige Aufklärung, was diese Berufe betrifft. Man könne in der Schule eine Infoveranstaltung machen, die genau dies bewirkt. Aufklärung. 
                </p>
                <p className="assign">
                    Als Vierte und somit letzte Frage stellte sich heraus, dass einige Jugendliche kein Vertrauen in die Zukunft haben. Wir fragten, wie die Soziale Marktwirtschaft in der Zukunft wohl aussehen wird, und ob Sie denken, dass Ihre Wünsche eventuell in Erfüllung gehen. Fast alle von Ihnen meinen, dass es sehr unwahrscheinlich wäre, da es zum Teil ein komplettes Umdenken fordert. Wir als Team hoffen jedoch in die Soziale Marktwirtschaft und in den Staat. Es muss sich etwas ändern. 
                </p>
                <p className="assign">
                    Zusammenfassend kann man sagen, dass die Jugendliche im Grunde genommen zufrieden mit der sozialen Marktwirtschaft sind. Die Grundideen sind gut, jedoch mangelt es an einigen Stellen, wo man tiefer nachdenken muss. Zitat:" Die Regierung muss was gscheits machen, mal zur Abwechslung." 
                    Wir hoffen zusammen, dass genau das geschehen wird. Wir hoffen auf eine gescheite Zukunft.
                </p>
            </div >

        </>
  );
};

export default Assignment1;
