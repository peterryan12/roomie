import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"

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

interface IProfileDropdownProps {
  toggle: () => void,
  currUser: User,
  updateUserInfo: React.Dispatch<React.SetStateAction<User>>;

}

export const ProfileDropdown = (props: IProfileDropdownProps) => {

    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLDivElement | null>(null);
   

   
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
              props.toggle() // Close dropdown if clicked outside
            }
          };
      
          // Add event listener
          document.addEventListener('mousedown', handleClickOutside);
      
          // Cleanup event listener on unmount
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    }, [props.toggle])

  
    return <div className="bg-[rgb(255,253,208)] absolute right-6  mt-73 p-4 rounded border shadow-lg" ref={dropdownRef} id="prof-dropdown"> 
            <h1><u>John Cornelius Doe</u></h1>
      
                <nav>
            <ul>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button onClick={() => {document.body.classList.toggle('dark-mode');}}>Dark Mode</button></li>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button onClick={() => {
                   props.toggle();
                   navigate('/profile', { state: { currUser: props.currUser} })
                }} className="hover:bg-[rgb(240,240,208)]">Edit Profile</button></li>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button onClick={() => {
                    props.toggle();
                    navigate('/');
                }} >Home</button></li>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button className="hover:bg-[rgb(240,240,208)]">Logout</button></li>
            </ul>
            </nav>
         
    </div>
}