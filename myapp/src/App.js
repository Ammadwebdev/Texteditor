import logo from './logo.svg';
import './App.css';

import About from './components/About';

import Navbar from './components/Navbar';

import TextForm from './components/TextForm';





function App() {
  return (
   <>

     


  {/* <Navbar title="TextUtils2" About="About"> </Navbar> */}

 <Navbar title="TextUtils">  </Navbar>

<div className="container my-3">

<About/>

 <TextForm heading="Enter the text to analyze"/>

</div>

   </>

  );
}


export default App;
