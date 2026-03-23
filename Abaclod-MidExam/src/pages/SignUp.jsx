import {useState} from 'react'
const SignUp=()=>{
    const [name, setName]=useState("");
    const [email,  setEmail]=useState("");
    const [password, setPassword]=useState("");

    const submits=(b)=>{
        b.preventDefault();
        console.log("did it work", name);
    }
return(
    <>
    <form onSubmit={submits}>
    <div>
    <input type="text"
    value={name}
    onChange={a=>setName(a.target.value)}
    placeholder="Name..."/>
    </div>
    <div>
    <input type="text"
    value={email}
    onChange={a=>setEmail(a.target.value)}
    placeholder="Name..."/>
    </div>
    <div>
    <input type="text"
    value={password}
    onChange={a=>setPassword(a.target.value)}
    placeholder="Name..."/>
    </div>
    <button>Sumbit</button>
</form> 

    </>
    );
}
export default SignUp;