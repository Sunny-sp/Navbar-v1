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

// const Login = () => {
//   const [username,setUsername] = useState('')
//   const [password,setPassword] = useState('')
//   const [success,setSuccess] = useState('')
//   const [error,setError]= useState('')
//   const handleSubmit = (event) => {
//       event.preventDefault()
//       if(username===""||password==="") {
//           setError("Enter username and password")
//           setSuccess("")
//       }
//       else {
//           setSuccess("Login successful")
//           setError("")
//       }
//   }
// return (
//   <>
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Username:</label>
//           <input
//             style={{ width: "40%" }}
//             type="text"
//             id="name"
//             value={username}
//             onChange={(event)=>setUsername(event.target.value)}
//             className="form-control"
//             placeholder="Enter Name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             style={{ width: "40%" }}
//             type="password"
//             id="pwd"
//             value={password}
//             onChange={(event)=>setPassword(event.target.value)}
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//         {success?<div className="text-success">{success}</div>:null}
//         {error?<div className="text-danger">{error}</div>:null}
//       </form>
//     </div>
//   </>
// );
// };

export default Login;
