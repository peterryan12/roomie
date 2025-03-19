import { UsernamePasswordForm } from "./UsernamePasswordForm";
import { useNavigate } from "react-router-dom";
import { sendPostRequest } from "./sendPostRequest";

export const RegisterPage = (props) => {
    const navigate = useNavigate();
    const handleSubmit = async (username, password) => {
       
        console.log('Username:', username);
        console.log('Password:', password);
    
        try {
         const response = await sendPostRequest('/auth/register', {username: username, password: password})
          console.log('Registering user...');
          if (response){
            console.log(response.token);
            props.setToken(response.token);
            navigate('/');
         }
        } catch (error) {
          console.error('Error during registration:', error);
        } finally {
       
        }
      };
    return (
        <>
        <h1 className="text-4xl font-bold">Register</h1>
        <UsernamePasswordForm handler={handleSubmit}/>
        </>
    )
}