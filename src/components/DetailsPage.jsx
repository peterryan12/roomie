import carraway from '../assets/carraway.jpg';
import lorem from '../assets/lorem.png';
import carraway_2 from '../assets/carraway_2.jpg';

export const DetailsPage = (props) => {
    return (
        <div className='m-5'>
            <h1 className="text-3xl">{props.listingName}</h1>
            <div className="grid grid-cols-2 gap-10 items-start content-center mt-9 auto-rows-min">
                <div className='bg-indigo-50 p-5 w-full h-full min-h-64 rounded border flex flex-col gap-4'>
                    <p>
                        This cardboard bungalow may be somewhat of an eyesore,<br /> 
                        but it posts gorgeous views of the Long Island Sound, <br /> 
                        as well as the consoling proximity of millionaires.
                    </p>
                    <div className='flex gap-3'>
                    <div className='flex flex-col gap-1'>
                    <img src={lorem} className='w-28 h-28 rounded-full self-start border-[0.5px]' />
                    <p>John Cornelius Doe, 47</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <p><u>Looking For:</u></p>
                    <p>Short to Medium Term Lease</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <p><u>Roomie Rating: </u></p>
                    <p>4.96</p>
                    </div>
                    </div>
                </div>
                <div className="text-left bg-indigo-50 p-5 w-full h-full min-h-64 rounded border flex flex-col gap-4">
                    <p>Monthly Rate: $80</p>
                    <p>Rules: No Smoking, No Pets, Quiet Hours 11P.M-7A.M</p>
                  <div className='flex justify-around'>
                    <img src={carraway} className="w-36 h-36 rounded self-start" />
                    <img src={carraway_2} className="w-36 h-36 rounded self-start" />
                    </div>
                </div>
            </div>
        </div>
    );
};
