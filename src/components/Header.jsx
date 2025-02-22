import loremImage from '../assets/lorem.png';
import { ProfileDropdown } from './ProfileDropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();
    const [profileDropdownHidden, setProfileDropdownHidden] = useState(true);
    const toggleProfileDropdown = () => {
        setProfileDropdownHidden((prev) => !prev);
    }
    return (
        <div className="bg-indigo-50 fixed top-0 left-0 right-0 p-5 z-10 border-b">
            <header className="flex justify-between items-center">
               <button onClick={() => navigate('/')}><h1 className="text-2xl">roomie</h1></button> 
                <img src={loremImage} className="w-16 h-16 rounded-full" onClick={() => {setProfileDropdownHidden((prev) => (!prev))}}></img>
                {profileDropdownHidden ? null : <ProfileDropdown toggle={toggleProfileDropdown}/>}
            </header>
        </div>
    )
}