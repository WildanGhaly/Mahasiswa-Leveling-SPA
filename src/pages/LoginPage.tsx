import { Link } from 'react-router-dom';
import './../styles/AuthBox.css';

const LoginPage = () => {
  return (
    <div className='auth-container'>
      <h1>Login</h1>
      <form className='auth-box'>
        <div className='input-box-label'>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className='input-box-label'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <div className='input-box-submit'>
            <button type="submit">Login</button>
            <div>Don't have an account?</div>
            <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
