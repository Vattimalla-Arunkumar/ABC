import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import About from './about';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Nav></Nav>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
