import './App.css';
import Header from './componet/Header';
import Home from './componet/Home';
import About from './componet/About';
import Intro from './componet/Intro';
import Skills from './componet/Skills';
import Work from './componet/Work';
import Contact from './componet/Contact';
import QuickMenu from './componet/QuickMenu';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './css/style_lsj.scss';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Home></Home>
    <About></About>
    <Intro></Intro>
    <Skills></Skills>
    <Work ></Work>
    <Contact></Contact>
    <QuickMenu></QuickMenu>
    </div>
  );
}

export default App;
