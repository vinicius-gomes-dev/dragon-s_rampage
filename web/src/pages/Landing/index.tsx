import logoImg from '../../assets/images/Logo/Simples/dragon-logo1.png';

import './styles.css'

export function Landing() {
  return (
    <div id="page-landing">
      <div className="background"></div>
      <div id="page-landing-content" className="content">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" />
          <h2>Login</h2>
        </div>

        <main>
          <form className="form-login">
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </form>
        </main>


      </div>
    </div>
  );
}
