import dummyHouse from '../assets/dummy_house.jpg';
import loremImage from '../assets/lorem.png';


export const ListingCard = (props) => {
    return <div className="grid rounded p-5 grid-cols-[1fr_2fr] mt-15 max-h-[10em] overflow-hidden bg-indigo-50 items-center border-[0.5px]">
        <img src={dummyHouse} className="row-span-2 col-span-1 w-full h-full object-cover max-h-full max-w-full"></img>
        <div className='flex justify-between items-center m-4'>
        <p className="col-span-1 row-span-1 object-cover">{props.info}</p>
       <div className='flex flex-col m-2'>
        <img src={loremImage} className="w-16 h-16 rounded-full "></img>
        <p className='text-sm'>John Doe</p>
        </div>
        </div>
        
    </div>
}