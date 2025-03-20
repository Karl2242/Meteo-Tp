import "./App.css";
import Header from "./components/header/header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [selectedDay, setSelectedDay] = useState(0); // Par défaut : premier jour

  return (
    <>
      <div className="App">
        <Header />
        <div className="row">
          <div className="col s12 m6 push-m3">
            <div className="weather card blue-grey darken-1">
              <Info selectedDay={selectedDay} />
              <div className="card-action">
                <Footer setSelectedDay={setSelectedDay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
