import loremImage from '../assets/lorem.png';
import { InfoItem } from './InfoItem';
import { Pencil } from 'lucide-react';

export const Profile = () => {
    return <div>
        <div id="meta-container"  className="flex flex-col items-center gap-4">
            <img src={loremImage} className='w-24 h-24 rounded-full'></img>
            <div className='flex gap-3 items-center justify-center'>
            <p>John Cornelius Doe</p>
            <button>{<Pencil size={16} />}</button>

            </div>
        </div>

        <div id="user-info" className='flex flex-col items-center mt-8 pb-15'>
           <div className='flex gap-4'>  <textarea className="h-30 w-80 border shadow-lg p-3" placeholder='Update your bio. This is the best way for potential lardlords to get to know you!'/>
           <button className='mt-3'>{<Pencil size={16} />}</button></div>
          
            <div id="info-items-container" className='flex flex-col items-end'>
            <InfoItem item={"Username"} />
            <InfoItem item={"Email"} />
            <InfoItem item={"Status"} />
            </div>
        </div>
    </div>

}