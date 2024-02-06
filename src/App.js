//FRONT END POR TOBIAS CASAZZA
import './App.css';
import InicioSesion from './COMPONENT/InicioSesion/InicioSesion';
import {Route,Switch, Router} from 'react-router-dom';
import NuevoUsuario from './COMPONENT/NuevoUsuario/NuevoUsuario';
import {createBrowserHistory} from 'history';
import Home from './COMPONENT/SistemaGestion/SistemaGestion'
import SistemaGestion from './COMPONENT/SistemaGestion/SistemaGestion';

function App() {
  const history = createBrowserHistory();
  return (
    
    <Router history={history}>
    <div className="App">
      
      <Switch>
        <Route path='/Home/:user' component={SistemaGestion}/>
        <Route path='/NuevoUsuario' component={NuevoUsuario}/>
        <Route path='/' component={InicioSesion}></Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
