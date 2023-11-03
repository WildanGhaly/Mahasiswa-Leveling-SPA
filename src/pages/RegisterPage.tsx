import { Link } from 'react-router-dom';
import './../styles/AuthBox.css';

const RegisterPage = () => {
  return (
    <div className='auth-container'>
      <h1>Register</h1>
      <form className='auth-box'>
        <div className='input-box-label'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className='input-box-label'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div className='input-box-label'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
        </div>
        <div className='input-box-submit'>
            <button type="submit">Register</button>
            <div>Already have an account?</div>
            <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
