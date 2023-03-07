import { useState} from "react"

const Signup = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(email, password);
        const response = await fetch("/api/user/signup",{
            method:"POST",
            body: JSON.stringify({email,password}),
            headers:{
                "Content-Type": 'application/json'
            }
        })
        const json = await response.json();
        if(!response.ok){
            console.log(json.error)
        }
        if(response.ok){
            props.toggling_logged()
        }
    }
    return (  
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input 
                type="email"
                onChange = {(e)=>setEmail(e.target.value)}
                value= {email}
            />
            <label>Password:</label>
            <input 
                type="password"
                onChange = {(e)=>setPassword(e.target.value)}
                value= {password}
            />
            <button>Sign up</button>
        </form> 
    );
}
 
export default Signup; 