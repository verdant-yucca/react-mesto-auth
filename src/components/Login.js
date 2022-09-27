import { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(password, email);
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h3 className="auth__title">Вход</h3>
        <form name="form-login" className="auth__form" noValidate onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={handleChangeEmail} className="auth__input" placeholder="E-mail" required minLength="2" maxLength="40" />
          <input type="password" value={password} onChange={handleChangePassword} className="auth__input" placeholder="Пароль" required minLength="2" maxLength="200" />
          <button type="submit" className="auth__button-save" >Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
