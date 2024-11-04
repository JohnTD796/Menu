import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...loginData },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setLoginData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>Please enter login details below</p>
        <div>
          <p>Email</p>
          <div>
            <input
              type="email"
              className="p-1 text-black"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange} />
          </div>
        </div>
        <div>
          <p>Password</p>
          <div>
            <input
              type="password"
              className="p-1 text-black"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange} />
          </div>
        </div>
        <button
          type="submit"
          className="tbd">
          Sign in
        </button>
        {error && (
          <div>
            <p>Incorrect email or password</p>
          </div>
        )}
        {data && (
          <div>
            <p>Succesfully logged in</p>
          </div>
        )}
        <p className="tbd">
            No account?<span> </span>
            <Link className="tbd" to="/signup">Sign up</Link>
          </p>
      </form>
    </div>
  )

}

export default Login