import React from "react";
import "./Empregados.css";
import { Link } from "react-router-dom";

class Empregados extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empregados: []
    };
  }

  componentDidMount() {
    this.buscarEmpregado();
  }

  componentWillUnmount() {}

  buscarEmpregado = () => {
    fetch("https://mack-webmobile.vercel.app/api/users")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ empregados: dados });
      });
  };

  deletarEmpregado = (_id) => {
    fetch("https://mack-webmobile.vercel.app/api/users/" + _id, {
      method: "DELETE"
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarEmpregado();
      }
    });
  };

  renderTabela() {
    return (
      <table className="Tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Salario</th>
            <th>Aniversário</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.state.empregados.map((empregados) => (
            <tr>
              <td>
                <img src={empregados.avatar} alt="avatar" />
                <p>{empregados.name}</p>
              </td>
              <td>{empregados.email}</td>
              <td>{empregados.salary}</td>
              <td>{empregados.date}</td>
              <td>{empregados.status}</td>
              <td>
                <Link to={`/atualizar/${empregados._id}`}>
                  <button>Atualizar</button>
                </Link>
                <button onClick={() => this.deletarEmpregado(empregados._id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return <div>{this.renderTabela()}</div>;
  }
}
export default Empregados;
