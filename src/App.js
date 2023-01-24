import Create from "./componentes/Create.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Empregados from "./componentes/Empregados";
import "./App.css";
import Atualizar from "./componentes/Atualizar.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="headers">
            <h1>
              <Link to="/" style={{ textDecoration: "none" }}>
                Employee Management
              </Link>
            </h1>
            <button>
              <Link to="/Create" style={{ textDecoration: "none" }}>
                Add Employee +
              </Link>
            </button>
          </div>

          <Switch>
            <Route exatct path="/Create" component={Create} />
            <Route exatct path="/atualizar/:_id" component={Atualizar} />
          </Switch>

          <div className="tabela">
            <Empregados />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
