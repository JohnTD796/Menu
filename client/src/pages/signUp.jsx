import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState(
    { 
      username: '',
      email: '', 
      password: '' 
    }
  );
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...signUpData },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>Please enter login details below</p>
        <div>
          <p>Username</p>
          <div>
            <input
              type="text"
              className="p-1 text-black"
              placeholder="Username"
              name="username"
              value={signUpData.username}
              onChange={handleChange} />
          </div>
        </div>
        <div>
          <p>Email</p>
          <div>
            <input
              type="email"
              className="p-1 text-black"
              placeholder="Email"
              name="email"
              value={signUpData.email}
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
              value={signUpData.password}
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
            <p> Please enter a different username.</p>
          </div>
        )}
        {data && (
          <div>
            <p>Succesfully created account</p>
          </div>
        )}
        <p className="tbd">
            Already have an account?<span> </span>
            <Link className="tbd" to="/login">Login</Link>
          </p>
      </form>
    </div>
  )

}

export default SignUp