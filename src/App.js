import React, { useState } from 'react';
import './App.css'; // Importando o CSS separado

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para o envio do formulário
    console.log('Login: ', username, password);
  };

  return (
    <div className="container">
      <h2 className="title">Cadastro</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label" htmlFor="username"></label>
          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
            placeholder="Digite seu nome completo"
          />
          
        </div>
      
     <div className='inputGroup'>
        <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
            placeholder="Digite seu nome e-mail"
          />
            </div>
        
        <div className="inputGroup">
  < label className="label" htmlFor="password"></label>
  <input
  type="text"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  onInput={(e) => {
    e.target.value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
  }}
  maxLength={11} // Limite de 11 dígitos
  className="input"
  required
  placeholder="Digite seu CPF"
/>



  
</div>

<label className="label" htmlFor="password"></label>
<input
  type="text"
  id="password"
  
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

    // Formata a data com as barras
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length >= 5) {
      value = value.slice(0, 5) + '/' + value.slice(5);
    }

   
  }}
  maxLength={10} // Limite de 10 caracteres (DD/MM/AAAA)
  className="input"
  required
  placeholder="Digite sua data de nascimento"
/>


        <button type="submit" className="button">Cadastrar</button>

      </form>
      <div className="links">
        <a href="/forgot-password" className="link">Esqueceu a senha?</a>
        <a href="/register" className="link">Registrar-se</a>
      </div>
    </div>
  );
};

export default LoginPage;
