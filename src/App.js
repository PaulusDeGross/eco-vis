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
                <div id="team" className="team">
                    <TeamCard
                        name="Paul"
                        why="Ich bin der Technikfreakt im Team. Von mir stammt die Website sowie das Design eben dieser. An Econo-Me habe ich teilgenommen, um mich weiter über unsere Wirtschaft und deren Zukunft zu informieren."
                        role="IT Manager"
                        reference="https://www.github.com/PaulusDeGross"
                        ref_n="GitHub"
                    />
                    <TeamCard
                        name="Katharina"
                        why="unknown"
                        role="Recherche"
                        reference="unknown"
                        ref_n="unknown"
                    />
                    <TeamCard
                        name="Lara"
                        why="unknown"
                        role="Recherche"
                        reference="unknown"
                        ref_n="unknown"
                    />
                </div>
                <Sources />
            </div>
            <Footer />
        </>
    );
}

export default App;
