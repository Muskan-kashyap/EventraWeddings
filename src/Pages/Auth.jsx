import { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '' }); // Clear form on toggle
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = isLogin ? 'Login' : 'Signup';
    
    // Backend-Ready: This is where Firebase signInWithEmailAndPassword or createUserWithEmailAndPassword would be called.
    console.log(`${action} attempt with:`, formData);
    alert(`Attempting ${action}... (Check console for data)`);
    
    // After successful login, you would navigate to the Profile Page
    // navigate('/profile'); 
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        
        <h1 className="auth-title">{isLogin ? 'Welcome Back!' : 'Join BiharWeddings'}</h1>
        <p className="auth-subtitle">
          {isLogin ? 'Login to view your bookings and favorites.' : 'Create an account in seconds.'}
        </p>

        {/* --- Social Login Options (for Firebase) --- */}
        <div className="social-login-group">
          <button className="social-btn google-btn">G Continue with Google</button>
          <button className="social-btn facebook-btn">f Continue with Facebook</button>
        </div>

        <div className="divider-text">OR</div>

        {/* --- Email/Password Form --- */}
        <form onSubmit={handleSubmit} className="auth-form">
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          <button type="submit" className="btn-primary-auth">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        {/* --- Toggle Switch --- */}
        <p className="toggle-prompt">
          {isLogin ? "Don't have an account?" : "Already a member?"}
          <span onClick={toggleAuthMode} className="toggle-link">
            {isLogin ? ' Sign Up' : ' Log In'}
          </span>
        </p>
        
        {isLogin && <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>}
        
      </div>
    </div>
  );
};

export default Auth;