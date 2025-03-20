import loremImage from '../assets/lorem.png';
import { ProfileDropdown } from './ProfileDropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface PersonalInfo {
    hobbies: string,
    favoriteFact: string,
    petPeeve: string
  }
  
   interface User {
    name: string,
    profilePic: string,
    rating: number,
    age: number,
    type: string,
    bio: string,
    personalInfo: PersonalInfo,
    userName: string,
    email: string,
    status: string
  }


interface IHeaderProps {
  currUser: User,
  updateUserInfo: React.Dispatch<React.SetStateAction<User>>;
}


export const Header = (props: IHeaderProps) => {
    const navigate = useNavigate();
    const [profileDropdownHidden, setProfileDropdownHidden] = useState(true);
    const toggleProfileDropdown = () => {
        setProfileDropdownHidden((prev) => !prev);
    }
    // if (props.currUser){
    // console.log(props.currUser.profilePic);

    // }
    return (
      props.currUser &&
        <div className="bg-indigo-50 fixed top-0 left-0 right-0 p-5 z-10 border-b" id="main-header">
            <header className="flex justify-between items-center">
               <button onClick={() => navigate('/')}><h1 className="text-2xl">roomie</h1></button> 
                <img src={props.currUser ? props.currUser.profilePic : loremImage} className="w-16 h-16 rounded-full" onClick={() => {setProfileDropdownHidden((prev) => (!prev))}} alt="Current user"></img>
                {profileDropdownHidden ? null : <ProfileDropdown toggle={toggleProfileDropdown} currUser={props.currUser} updateUserInfo = {props.updateUserInfo}/>}
            </header>
        </div>
    )
}