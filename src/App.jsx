import "./App.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
function App() {
  return (
    <main>
      <Nav />
      <Github />
      <Note />
      <Resume />
      <Spotify/>
      <Dock />
      <Cli/>
    </main>
  );
}

export default App;
