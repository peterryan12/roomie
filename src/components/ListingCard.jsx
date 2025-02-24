
import { useNavigate } from 'react-router-dom';


export const ListingCard = (props) => {
    const navigate = useNavigate();
    return <div className="grid rounded p-5 grid-cols-[1fr_2fr] mt-15 max-h-[10em] overflow-hidden bg-indigo-50 items-center border-[0.5px]" onClick={() => navigate('/details', { state: { lister: props.lister, listing: props.listing } })}>
        <img src={props.listing.images[1]} className="row-span-2 col-span-1 w-full h-full object-cover max-h-full max-w-full border-[0.5px]"></img>
        <div className='flex justify-between items-center m-4'>
        <p className="col-span-1 row-span-1 object-cover">{props.listing.preview}</p>
       <div className='flex flex-col m-2'>
        <img src={props.lister.profilePic} className="w-16 h-16 rounded-full "></img>
        <p className='text-sm'>{props.lister.name}</p>
        </div>
        </div>
        
    </div>
}