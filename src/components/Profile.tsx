import loremImage from '../assets/lorem.png';
import { InfoItem } from './InfoItem';
import { Pencil } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { User } from '../App';

interface IProfileProps {
    authToken: String,
    currUser: User
}

export const Profile = (props: IProfileProps) => {
    const handleUpdate = async () => {
        if (!currUser || !currUser.personalInfo) {
            console.error("No user found to update.");
            return;
        }
    
        const updatedFields = {
            bio,
            email,
            "personalInfo.hobbies": hobbies,
            "personalInfo.favoriteFact": favFact,
            "personalInfo.petPeeve": petPeeve,
            status,
        };
    
        try {
            const response = await fetch(`/api/users/${currUser.userName}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${props.authToken}` },
                body: JSON.stringify(updatedFields),
            });
    
            if (!response.ok) {
                throw new Error("Failed to update user");
            }
    
            const data = await response.json();
            console.log("Update successful:", data);
    
            // Update frontend state
            if (updateUser) {
                updateUser(data.user);
            }
    
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        }
    };


    const location = useLocation();
    const currUser = location.state.currUser ?? props.currUser
    const updateUser = location.state?.updateUser;

    const [bio, setBio] = useState(currUser.bio);
    const [status, setStatus] = useState(currUser.status);
    const [email, setEmail] = useState(currUser.email);
    const [hobbies, setHobbies] = useState(currUser.personalInfo.hobbies);
    const [favFact, setFaveFact] = useState(currUser.personalInfo.favoriteFact);
    const [petPeeve, setPetPeeve] = useState(currUser.personalInfo.petPeeve);

    return <div>
        <div id="meta-container"  className="flex flex-col items-center gap-4">
            <img src={currUser.profilePic} className='w-24 h-24 rounded-full' alt="Current user"></img>
            <div className='flex gap-3 items-center justify-center'>
            <p>{currUser.name}</p>
            <button>{<Pencil size={16} />}</button>

            </div>
        </div>

        <div id="user-info" className='flex flex-col items-center mt-8 pb-15'>
           <div className='flex gap-4'>  
           <textarea
    className="h-50 w-80 border shadow-lg p-3"
    placeholder={currUser.bio || "Update your bio. This is the best way for potential landlords to get to know you!"}
    value={bio || ""}
    onChange={(e) => setBio(e.target.value)}
/>
           <button className='mt-3'>{<Pencil size={16} />}</button></div>
          
            <div id="info-items-container" className='flex flex-col items-end border bg-indigo-50 mt-10 p-5 rounded' >
            <InfoItem item={"Email"} value={email} toggle={setEmail}/>
            <InfoItem item={"Status"} value={status} toggle={setStatus}/>
            <InfoItem item={"Hobbies"} value={hobbies} toggle={setHobbies}/>
            <InfoItem item={"Favorite Fact"} value={favFact} toggle={setFaveFact}/>
            <InfoItem item={"Pet Peeves"} value={petPeeve} toggle={setPetPeeve}/>

            </div>
            <button onClick={handleUpdate} className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition mt-6'>Update</button>
        </div>
    </div>

}