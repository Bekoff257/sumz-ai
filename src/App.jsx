import Hero from "./components/Hero";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Demo from "./components/Demo";

import "./output.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
      <ToastContainer />
    </main>
  )
}

export default App