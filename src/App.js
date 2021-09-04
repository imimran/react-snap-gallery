
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './screens/Gallery';

function App() {
  return (

     <div className="App">
       <h1>Image Gallery</h1> 
     <Router>
         <Switch>
         <Route path='/' exect component={Gallery}/>
         </Switch>
     </Router>

 </div>
  );
}

export default App;
