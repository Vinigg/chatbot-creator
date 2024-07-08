import './App.css';
import DocumentDropper from './components/DocumentDropper/index';
function App() {
  return (
    <div className="App">
      <h1>Bem vindo as configurações de chatbot WhatsApp</h1>
      <p>Voltar para a listagem</p>
      <form>
         <input placeholder='Nome do chatbot'/>
         <input placeholder='Versão'/>
         <DocumentDropper/>
         <button>Voltar</button>
         <button>Salvar chatbot</button>
      </form>
    </div>
  );
}

export default App;
