import { UsernamePasswordForm } from "./UsernamePasswordForm";
import { Link, useNavigate } from "react-router-dom";
import { sendPostRequest } from "./sendPostRequest";


export const LoginPage = (props) => {
    const navigate = useNavigate();
    const handleSubmit = async (username, password) => {
        
        console.log('Username:', username);
        console.log('Password:', password);
    
        try {
         let response = await sendPostRequest('/auth/login', {username: username, password: password});
         if (response){
            console.log(response.token);
            props.setToken(response.token);
            navigate('/');
         }
          console.log('Logging in ...');
        } catch (error) {
          console.error('Error during login:', error);
        } finally {
           
        }
      };
    return (
        <>
        <h1 className="text-4xl font-bold">Login</h1>
        <UsernamePasswordForm handler={handleSubmit} />
        <Link to={"/register"}>
            <p>Don't have an account? Register here: </p>
            
            </Link>
        </>
    )
}