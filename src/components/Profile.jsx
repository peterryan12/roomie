import loremImage from '../assets/lorem.png';
import { InfoItem } from './InfoItem';
import { Pencil } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Profile = () => {
    const location = useLocation();
    const currUser = location.state?.currUser;
    const updateUser = location.state?.updateUser;

    const [username, setUsername] = useState(currUser.username);
    const [status, setStatus] = useState(currUser.status);
    const [email, setEmail] = useState(currUser.email);
    const [hobbies, setHobbies] = useState(currUser.personalInfo.hobbies);
    const [favFact, setFaveFact] = useState(currUser.personalInfo.favoriteFact);
    const [petPeeve, setPetPeeve] = useState(currUser.personalInfo.petPeeve);

    return <div>
        <div id="meta-container"  className="flex flex-col items-center gap-4">
            <img src={currUser.profilePic} className='w-24 h-24 rounded-full'></img>
            <div className='flex gap-3 items-center justify-center'>
            <p>{currUser.name}</p>
            <button>{<Pencil size={16} />}</button>

            </div>
        </div>

        <div id="user-info" className='flex flex-col items-center mt-8 pb-15'>
           <div className='flex gap-4'>  <textarea className="h-50 w-80 border shadow-lg p-3" placeholder='Update your bio. This is the best way for potential lardlords to get to know you!'>{currUser.bio}</textarea>
           <button className='mt-3'>{<Pencil size={16} />}</button></div>
          
            <div id="info-items-container" className='flex flex-col items-end border bg-indigo-50 mt-10 p-5 rounded'>
            <InfoItem item={"Username"} value={username} toggle={setUsername}/>
            <InfoItem item={"Email"} value={email} toggle={setEmail}/>
            <InfoItem item={"Status"} value={status} toggle={setStatus}/>
            <InfoItem item={"Hobbies"} value={hobbies} toggle={setHobbies}/>
            <InfoItem item={"Favorite Fact"} value={favFact} toggle={setFaveFact}/>
            <InfoItem item={"Pet Peeves"} value={petPeeve} toggle={setPetPeeve}/>

            </div>
            <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition mt-6'>Update</button>
        </div>
    </div>

}