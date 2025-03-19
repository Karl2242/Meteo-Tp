import "./App.css";
import Header from "./components/header/header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div class="row">
          <div class="col s12 m6 push-m3">
            <div class="weather card blue-grey darken-1">
              <Info />
              <div className="card-action">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
