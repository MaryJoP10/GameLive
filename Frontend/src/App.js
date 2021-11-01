import './Styles/App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/home';
import Library from './Pages/library';
import Chat from './Pages/chat'
import Signin from './Pages/signin'
import Request from './Pages/request'


function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/library' component={Library}/>
          <Route path='/chat' component={Chat}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/request' component={Request}/>
        </Switch>
        
      </Router>

  );
}

export default App;
