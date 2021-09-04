
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './screens/Gallery';
import ImageUplod from './components/ImageUplod';

function App() {
  return (

     <div className="App">
       <h1>Image Gallery</h1> 
       <ImageUplod/>
     <Router>
         <Switch>
         <Route path='/' exect component={Gallery}/>
         </Switch>
     </Router>

 </div>
  );
}

export default App;
