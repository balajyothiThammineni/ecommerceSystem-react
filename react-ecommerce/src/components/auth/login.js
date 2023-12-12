import axios from "axios";
import { useState } from "react";
import MyNavbar from "../navbar";
import { useSearchParams, useNavigate } from "react-router-dom";

function Login() {
  const [param] = useSearchParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(param.get('msg'));
  const navigate = useNavigate();

  const doLogin = () => {
    let token = window.btoa(username + ':' + password);
    axios.post('http://localhost:8080/auth/login', {}, {
      headers: {
        'Authorization': 'Basic ' + token
      }
    })
      .then(function (response) {
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('sid', response.data.sellerId);  // Store seller ID in local storage
        localStorage.setItem('isLoggedIn', true);
        let role = response.data.role;
        switch (role) {
          case 'CUSTOMER':
            navigate('/customer/dashboard');
            break;
          case 'SELLER':
            navigate('/seller/Home');
            break;
          case 'EXECUTIVE':
            navigate('/executive/Home');
            break;
          default:
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status === 401) {
          setMsg('Invalid credentials. Please try again.');
        } else {
          setMsg('Invalid credentials');
        }
      });
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', height: '100vh' }}>
      <MyNavbar />

      <div className="row d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <div className="card col-md-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="card-body">
            <h4 className="card-title mb-4 text-center">Login</h4>
            {msg && <div className="alert alert-danger mb-3 text-center">{msg}</div>}
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-block" onClick={doLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
