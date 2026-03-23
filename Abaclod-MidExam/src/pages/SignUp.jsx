import {useState} from 'react'
const SignUp=()=>{
    const nameRegex=/^[A-Za-z]{2,}$/;
    const usernameRegex=/^[A-Za-z0-9._-]+$/;
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [name, setName]=useState("");
    const [username, setUsername]=useState("");
    const [email,  setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error1, setError1]=useState("");
        const [error2, setError2]=useState("");
            const [error3, setError3]=useState("");
                const [error4, setError4]=useState("");

    const submits=(b)=>{
        b.preventDefault();

        if(!emailRegex.test(email)) {
      setError1("Valid Email Format");
      return;
    }
            if(!nameRegex.test(name)) {
      setError2("Only Letters");
      return;
    }
            if(!usernameRegex.test(username)) {
      setError3("Letetrs, Numbers, dot, underscore, and hyphen");
      return;
    }
            if(!passwordRegex.test(password)) {
      setError4("8-16 characters inclusive atleast one of these: uppercase, lowercase, number and special caracter");
      return;
    }
    }
return(
    <>
    
    <form onSubmit={submits}>
    <div>
        <p>{error1}</p>
    <input type="text"
    value={name}
    onChange={a=>setName(a.target.value)}
    placeholder="Name..."/>
    </div>
    <div>
        <p>{error2}</p>
    <input type="text"
    value={username}
    onChange={a=>setUsername(a.target.value)}
    placeholder="username..."/>
    </div>
    <div>
        <p>{error3}</p>
    <input type="text"
    value={email}
    onChange={a=>setEmail(a.target.value)}
    placeholder="Email..."/>
    </div>
    <div>
        {error4}
    <input type="password"
    value={password}
    onChange={a=>setPassword(a.target.value)}
    placeholder="Password..."/>
    </div>
    <button disabled={!username || !email || !password ||!name }
    onClick={submits}
    >
    Sumbit
    </button>
</form> 

    </>
    );
}
export default SignUp;