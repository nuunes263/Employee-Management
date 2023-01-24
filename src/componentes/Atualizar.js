import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Create.css";

function Atualizar() {
  const { _id } = useParams();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [salario, setSalario] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState();
  const [avatar, setAvatar] = useState("");

  const Random = () => {
    const valor = Math.floor(Math.random() * 100);
    return valor;
  };

  const put = async (e) => {
    e.preventDefault();
    const body = {
      name: nome + " " + sobrenome,
      email: email,
      salary: salario,
      date: data,
      status: status,
      avatar: setAvatar(
        `https://randomuser.me/api/portraits/women/${Random()}.jpg`
      )
    };

    axios
      .put(`https://mack-webmobile.vercel.app/api/users/${_id}`, body)
      .then(() => alert("Empregado atualizado com sucesso !!"))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error.response.data));

    return avatar;
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={put}>
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
            <input type="submit" value="Atualizar" />
          </div>
        </form>
      </div>
    </>
  );
}
export default Atualizar;
