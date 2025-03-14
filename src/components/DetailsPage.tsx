
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export const DetailsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const curLister = location.state?.lister;
    const curListing = location.state?.listing;
  
  
   
    return (
        <div className='m-5'>
            <h1 className="text-3xl">{curListing.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start content-center mt-9 auto-rows-min">
                <div className='bg-indigo-50 p-5 w-full h-full min-h-64 rounded border flex flex-col gap-4' id="grid-cell-1">
                    <p>
                       {curListing.description}
                    </p>
                    <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                    <img src={ curLister.profilePic} className='w-28 h-28 rounded-full self-start border-[0.5px] object-cover' onClick={() => navigate('/overview', { state: { leaser: curLister } })} alt="Lister of room"/>
                    <p>{curLister.name} , {curLister.age}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <p><u>Looking For:</u></p>
                    <p>{curLister.status}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <p><u>Roomie Rating: </u></p>
                    <p>{curLister.rating}</p>
                    </div>
                    </div>
                </div>
                <div className="text-left bg-indigo-50 dark:bg-gray p-5 w-full h-full min-h-64 rounded border flex flex-col gap-4" id="grid-cell-2">
                    <p>Monthly Rate: ${curListing.price}</p>
                    <p>Rules: {curListing.rules}</p>
                  <div className='flex justify-around'>
                  {curListing.images?.map((imgSrc: string) => (
                            <img src={imgSrc} className="w-36 h-36 rounded self-start object-cover border shadow-lg" alt="Current listing" />
                        ))}
                  
                    </div>
                </div>
            </div>
        </div>
    );
};
