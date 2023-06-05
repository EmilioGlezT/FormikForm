
import './App.css';
import FormFormik from './components/formFormik';
import SecondForm from './components/formBasico';
import { useState } from 'react';

function App() {
  const[vista,setVista] = useState("basica");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setVista("basica")}
          style={{color: vista === "basica" ? "#fff": ""}}>
            Primer Form 
          </h3>
          <h3
          onClick={() => setVista("avanzada")}
          style={{color: vista === "avanzada" ? "#fff": ""}}>
            Segundo Form
          </h3>
      </nav>
      {vista === "basica" ? <FormFormik /> : <SecondForm />}
    </div>
  );
}

export default App;
