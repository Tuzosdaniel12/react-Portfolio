
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import About from "./Pages/About";
import Home from "./Pages/Home";
import Work from "./Pages/Work";

function App() {
  return (
    <Router>
      <div> 
        <Header/>
          <Switch>
            <Route exact strict  path="/" component={Home}/>
            <Route exact strict  path="/About" component={About}/>
            <Route exact strict path="/Work" component={Work}/>
            <Route exact path="*" component={Home} />
          </Switch>
        <Footer/>
      </div> 
    </Router>
    
    
  );
}

export default App;