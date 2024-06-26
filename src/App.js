import "./App.css";
import HeaderRules from "./Components/HeaderFooter/HeaderRules";
import PlayWindow from "./Components/PlayWindow";
import Footer from "./Components/HeaderFooter/Footer";
function App() {
  return (
    <div className="App">
      <HeaderRules />
      <PlayWindow />
      <Footer />
    </div>
  );
}

export default App;
