import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./screens/Gallery";
import ImageUplod from "./components/ImageUplod";
import URLUpload from "./components/URLUpload";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5 mb-3">Image Gallery</h1>
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 mb-2">
                <URLUpload />
              </div>
              <div className="col-lg-6 mb-2">
                <ImageUplod />
              </div>
            </div>
          </div>
        </div>

        <Router>
          <Switch>
            <Route path="/" exect component={Gallery} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
