import React, { useState } from "react";
import axios from "axios";
import "./Create.css";

const Create = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [salario, setSalario] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState();

  const Random = () => {
    const valor = Math.floor(Math.random() * 100);
    return valor;
  };

  const cadastrarEmpregado = async (e) => {
    e.preventDefault();
    const body = {
      name: nome + " " + sobrenome,
      email: email,
      salary: salario,
      date: data,
      status: status,
      avatar: `https://randomuser.me/api/portraits/women/${Random()}.jpg`
    };

    axios
      .post("https://mack-webmobile.vercel.app/api/users", body)
      .then(() => alert("Empregado cadastrado com sucesso !!"))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={cadastrarEmpregado}>
          <div className="label">
            <input
              type="text"
              name="name"
              id="nome"
              placeholder="Primeiro Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="label">
            <input
              type="text"
              name="name"
              id="sobrenome"
              placeholder="Ultimo Nome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>
          <div className="label">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label">
            <input
              type="text"
              name="salary"
              id="salario"
              placeholder="Salario"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </div>
          <div className="label">
            <input
              type="date"
              placeholder="dd/mm/aaaa"
              name="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="label">
            <input
              type="radio"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus("Active")}
            />
            Ativo
          </div>
          <div className="label">
            <input
              type="radio"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus("Inactive")}
            />
            Inativo
          </div>
          <div className="label">
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    </>
  );
};
export default Create;

// import React from "react";

// class Empregados extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nome: "",
//       sobrenome: "",
//       email: "",
//       salario: "",
//       data: "",
//       status: "",
//       empregado: [],
//     };
//   }

//   buscarEmpregado = () => {
//     fetch("https://mack-webmobile.vercel.app/api/users")
//       .then((resposta) => resposta.json())
//       .then((dados) => {
//         this.setState({ empregados: dados });
//       });
//   };

//   cadastraEmpregado = (empregado) => {
//     fetch("https://mack-webmobile.vercel.app/api/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(empregado),
//     }).then((resposta) => {
//       if (resposta.ok) {
//         this.buscarEmpregado();
//       }
//     });
//   };

//   atualizaNome = (e) => {
//     this.setState({
//       nome: e.target.value,
//     });
//   };

//   atualizaSobrenome = (e) => {
//     this.setState({
//       sobrenome: e.target.value,
//     });
//   };

//   atualizaEmail = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

//   atualizaSalario = (e) => {
//     this.setState({
//       salario: e.target.value,
//     });
//   };

//   atualizaData = (e) => {
//     this.setState({
//       data: e.target.value,
//     });
//   };

//   atualizaStatus = (e) => {
//     this.setState({
//       status: e.target.value,
//     });
//   };

//   submit() {
//     const empregado = {
//       nome: this.state.nome,
//       sobrenome: this.state.sobrenome,
//       salario: this.state.salario,
//       data: this.state.data,
//       status: this.state.status,
//     };

//     this.cadastraEmpregado(empregado);
//   }

//   render() {
//     return (
//       <div>
//         <form className="form">
//           <input
//             type="text"
//             name="nome"
//             id="nome"
//             placeholder="Primeiro Nome"
//             value={this.nome}
//             onChange={this.atualizaNome}
//           />

//           <input
//             type="text"
//             name="sobrenome"
//             id="sobrenome"
//             placeholder="Ultimo Nome"
//             value={this.sobrenome}
//             onChange={this.atualizaSobrenome}
//           />

//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email"
//             value={this.email}
//             onChange={this.atualizaEmail}
//           />

//           <input
//             type="text"
//             name="salario"
//             id="salario"
//             placeholder="Salario"
//             value={this.salario}
//             onChange={this.atualizaSalario}
//           />
//           <br></br>

//           <input
//             type="date"
//             placeholder="dd/mm/aaaa"
//             value={this.data}
//             onChange={this.atualizaData}
//           />
//           <br></br>
//           <br></br>
//           <label>
//             <input
//               type="radio"
//               name="status"
//               value={this.status}
//               onChange={this.atualizaStatus}
//             />
//             Ativo
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="status"
//               value={this.status}
//               onChange={this.atualizaStatus}
//             />
//             Inativo
//           </label>
//           <input type="submit" name="submit" onClick={this.submit()} />
//         </form>
//       </div>
//     );
//   }
// }
// export default Empregados;
