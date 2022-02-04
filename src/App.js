import "./App.css";
import {
    TeamCard,
    Navbar,
    Welcome,
    Footer,
    Assignment1,
    Sources,
} from "./components/index";

function App() {
    return (
        <>
            <Navbar className="foreground" />
            <div className="background">
                <Welcome id="welcome" />
                <Assignment1 />
                <h1 className="header">Über uns</h1>
                <div id="team" className="team border-b">
                    <TeamCard
                        name="Paul"
                        why="Ich habe an econo-me teilgenommen, um mehr über unsere Wirtschaft und die Zukunft unserer Wirtschaft zu lernen. Ich habe mir außerdem in diesem Zeitraum die Webentwicklung in React.js von grundauf beigebracht."
                        role="IT Manager"
                        reference="https://www.github.com/PaulusDeGross"
                        ref_n="GitHub"
                    />
                    <TeamCard
                        name="Lara"
                        why="Ich bin Teil des Informationsteams. Ich suche nach Informationen, forsche nach und formuliere anschließend die Texte. Und ich bin froh darüber, ich habe nämlich keine Ahnung von Technik..."
                        role="Recherche"
                        reference="https://discord.gg/ggvDbvVEZ3"
                        ref_n="Discord"
                    />
                    <TeamCard
                        name="Katharina"
                        why="Ich war ebenfalls Teil des Informationsteams, und habe bei der Formulierung der finalen Texte geholfen. Ich habe mich zudem mit der Informationsfindung beschäftigt."
                        role="Recherche"
                        reference=""
                        ref_n=""
                    />
                </div>

                <div id="quellen">
                    <Sources />
                </div>
            </div>
            <div className="container">
                <Footer />
            </div>
        </>
    );
}

export default App;
