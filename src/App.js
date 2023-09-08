import { Segment } from 'semantic-ui-react';
import './App.css';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';
function App() {
  return (
    <div classname="App">
      
      {/*<FormCliente />*/}
      {/*<FormProduto />*/}
      <FormEntregador/>
      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='red' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>
    </div>

  );
}

export default App;
