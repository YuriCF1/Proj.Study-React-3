import "./App.css";

//Img
import Rio from './assets/rio.jpg' 

function App() {
  return (
    <div className="App">
      <h1>Avançando</h1>
      <div>
        {/* Na pasta public, eu posso acessar os arquivos só usando a barra / */}
        <img src="/toronto.jfif" alt="Toronto" />
      </div>
      <div>
        {/* Porém,  normalmente fica na pasta assets dentro de src. Tem que importar la em cima */}
        <img src={Rio} alt="" />
      </div>
    </div>
  );
}

export default App;
