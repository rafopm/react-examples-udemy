import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EjemplosInicio from './components/EjemplosInicio';
import UseRefEjemplo from './components/UseRefEjemplo';
import UseStateEjemplo from './components/UseStateEjemplo';

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import EjemploAxios from "./components/EjemploAxios";
import EjemploFetch from "./components/EjemploFetch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ejemplos-inicio" element={<EjemplosInicio />} />
          <Route path="ejemplos-useref" element={<UseRefEjemplo />} />
          <Route path="ejemplos-usestate" element={<UseStateEjemplo />} />
          <Route path="ejemplos-fetch" element={<EjemploFetch />} />
          <Route path="ejemplos-axios" element={<EjemploAxios />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
      
    //   <h1>Clases React</h1>
    //  <EjemplosInicio />
    //  <UseRefEjemplo />
    //  <UseStateEjemplo />
    // </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
