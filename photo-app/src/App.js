import './App.css';
import Home from './components/Home';
import Photographers from './components/Photographers';
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <NavBar />
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/photographers" component={Photographers} />
        <Route exact path="/blog" component={Blog} />
      </>
    </div>
  );
}

export default App; 