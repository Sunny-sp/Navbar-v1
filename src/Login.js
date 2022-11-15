import { useState } from "react";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "" || password === "") {
      setError("Please enter valid username and password");
      setSuccess("");
    } else {
      setSuccess("you have successfully logged in!");
      setError("");
    }
    setUserName("")
    setPassWord("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type={"text"}
            placeholder="Enter name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type={"password"}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassWord(event.target.value)}
          ></input>
        </div>
        <button type="submit">Login</button>
        {success ? <div style={{color:'green'}}>{success}</div> : null}
        {error ? <div style={{color:'red'}}>{error}</div> : null}
      </form>
    </div>
  );
};
export default Login;
