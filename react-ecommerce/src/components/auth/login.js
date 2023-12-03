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
            // Code for default case (if needed)
        }
      });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <MyNavbar />

      <div className="card col-md-6">
        <div className="card-body">
          <h4 className="card-title mb-4">Login </h4>
          <hr></hr>
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
          {msg && <div className="alert alert-danger mt-3">{msg}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;
