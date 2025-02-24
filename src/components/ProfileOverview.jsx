import loremImage from '../assets/lorem.png';
import { useLocation } from 'react-router-dom';

export const ProfileOverview = () => {
    const location = useLocation();
    const leaser = location.state?.leaser; 
   
   return <div>
    <div id="meta-container"  className="flex flex-col items-center gap-4">
        <img src={leaser.profilePic} className='w-36 h-36 rounded-full border'></img>
        <div className='flex gap-3 items-center justify-center'>
        <p className='text-xl'>{leaser.name}, {leaser.age}</p>
        
        </div>
        <p className='text-sm'>Roomie Rating: {leaser.rating}</p>
    </div>

    <div id="user-info" className='flex flex-col items-center mt-8 pb-15'>
       <div className='flex gap-4'> 
        <div className='h-fit w-100 p-6 border shadow-lg p-3 rounded bg-indigo-50'>
            <p>
               {leaser.bio}
            </p>
         </div>
      </div>  
      <div className='flex flex-col  h-fit w-130 p-6 border shadow-lg p-3 rounded bg-indigo-50 mt-10 gap-3'>
        <p><u>Hobbies:</u> {leaser.personalInfo.hobbies}</p>
        <p><u>Favorite Fact:</u> {leaser.personalInfo.favoriteFact}</p>
        <p><u>Worst Pet Peeve:</u> {leaser.personalInfo.petPeeve}</p>
    </div>
    <div className='flex flex-col  h-fit w-130 p-6 border shadow-lg p-3 rounded bg-indigo-50 mt-10 gap-3'>
        <p><u>Username:</u>{leaser.userName}</p>
        <p><u>Email:</u> {leaser.email}</p>
        <p><u>Status:</u>{leaser.type}: {leaser.status}</p>
    </div>
    </div>
  
</div>
}