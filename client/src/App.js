
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./compoments/Footer";
import Header from "./compoments/header";
import About from "./pages/about";
import Home from "./pages/home";
import Work from "./pages/work";

function App() {
  return (
    <Router>
      <div> 
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Work" component={Work}/>
            <Route exact path="*" component={Home} />
          </Switch>
        <Footer/>
      </div> 
    </Router>
    
    
  );
}

export default App;
