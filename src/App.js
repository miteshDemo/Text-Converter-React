import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <div className="App">
      <Navbar title = "MyTextConverterApp"/>
      <TextForm heading = "Enter Text : " />
    </div>  
  );
}

export default App;
