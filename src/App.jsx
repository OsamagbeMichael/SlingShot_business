
import Page1 from "./components/Pag1/Page1";
import './App.css';
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";

function App() {
  return (
    <div className="App">
      <div className="sections">

      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      </div>
    </div>
  );
}

export default App;
