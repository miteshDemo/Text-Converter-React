import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <div className="App">
      <Navbar title = "MyReactApp" about = "About Demo"/>
      <TextForm heading = "Enter Text : " />
    </div>  
  );
}

export default App;
