import "./App.css";
import { TeamCard, Navbar, Welcome, Footer } from "./components/index";

function App() {
    return (
        <>
            <Navbar className="foreground" />
            <div className="background">
                <Welcome />

                <h1 className="header">Über uns</h1>
                <div id="team" className="team">
                    <TeamCard
                        name="Paul März"
                        why="Ich bin der Technikfreakt im Team. Von mir stammt die Website sowie das Design eben dieser. An Econo-Me habe ich teilgenommen, um mich weiter über unsere Wirtschaft und deren Zukunft zu informieren."
                        reference="https://www.github.com/PaulusDeGross"
                        ref_n="GitHub"
                    />
                    <TeamCard
                        name="Katharina Jäger"
                        why="Ich bin der Technikfreakt im Team. Von mir stammt die Website sowie das Design eben dieser. An Econo-Me habe ich teilgenommen, um mich weiter über unsere Wirtschaft und deren Zukunft zu informieren."
                        reference="unknown"
                        ref_n="unknown"
                    />
                    <TeamCard
                        name="Lara Stuhlmüller"
                        why="Ich bin der Technikfreakt im Team. Von mir stammt die Website sowie das Design eben dieser. An Econo-Me habe ich teilgenommen, um mich weiter über unsere Wirtschaft und deren Zukunft zu informieren."
                        reference="unknown"
                        ref_n="unknown"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
