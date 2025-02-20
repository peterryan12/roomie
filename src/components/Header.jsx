import loremImage from '../assets/lorem.png';
import { ProfileDropdown } from './ProfileDropdown';
import { useState } from 'react';

export const Header = () => {
    const [profileDropdownHidden, setProfileDropdownHidden] = useState(true);
    return (
        <div className="bg-indigo-50 fixed top-0 left-0 right-0 p-5 z-10 border-b">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl">roomie</h1>
                <img src={loremImage} className="w-16 h-16 rounded-full" onClick={() => {setProfileDropdownHidden((prev) => (!prev))}}></img>
                {profileDropdownHidden ? null : <ProfileDropdown />}
            </header>
        </div>
    )
}