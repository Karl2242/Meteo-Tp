import "./App.css";
import Header from "./components/header/header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";



function App() {
  const [selectedDay, setSelectedDay] = useState(0); 
  const [city, setCity] = useState("Niort");

  return (
    <>
      <div className="App">
        <Header />
        <SearchBar setCity={setCity} /> 
        <div className="row">
          <div className="col s12 m6 push-m3">
            <div className="weather card blue-grey darken-1">
              <Info selectedDay={selectedDay} city={city} />
              <div className="card-action">
                <Footer setSelectedDay={setSelectedDay} city={city} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
