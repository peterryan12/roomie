import carraway from '../assets/carraway.jpg';
import lorem from '../assets/lorem.png';


export const DetailsPage = (props) => {
    return (
        <div className='m-5'>
            <h1 className="text-3xl">{props.listingName}</h1>
            <div className="grid grid-rows-2 grid-cols-2 gap-10 items-start content-center mt-9">
                <p className="self-start">
                    This cardboard bungalow may be somewhat of an eyesore,<br /> but it posts 
                    gorgeous views of the Long Island Sound, <br /> as well as the consoling
                    proximity of millionaires.
                </p>
                <div className="text-left">
                <p>Monthly Rate: $80</p>
                <p>Rules: No Smoking, No Pets, Quit Hours 11P.M-7A.M</p>
                </div>
             
                <img src={carraway} className="row-start-1 col-start-1 self-start" />

                <img src={lorem} className='w-36 h-36 rounded-full row-start-2 col-start-2'></img>
              
            </div>
          
        </div>
    );
};
