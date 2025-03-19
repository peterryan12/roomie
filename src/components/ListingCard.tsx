import { useNavigate } from 'react-router-dom';

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

interface House {
    name: string,
    preview: string,
    price: number,
    description: string,
    images: string[],
    lister: User,
    rules: string
}

interface IListingCardProps {
    listing: House,
    lister: User
}

export const ListingCard = (props: IListingCardProps) => {
    const navigate = useNavigate();
    console.log("Profile pic");
    console.log(props.lister.profilePic);
    return (
        <div 
           id="listing-card" className="grid rounded p-5 grid-cols-[1fr_2fr] mt-5 bg-indigo-50 items-center border-[0.5px] gap-4 cursor-pointer"
            onClick={() => navigate('/details', { state: { lister: props.lister, listing: props.listing } })}
        >
            <img 
                src={props.listing.images[1]} 
                className="row-span-1 col-span-1 w-full h-full object-cover border-[0.5px]"
                alt="Listing"
            />
            <div className="flex justify-between items-start m-4 flex-wrap w-full">
                <p className="col-span-1 row-span-1 whitespace-normal break-words">
                    {props.listing.preview}
                </p>
                <div className="flex flex-col items-end space-y-2 p-2">
                    <img 
                        src={props.lister.profilePic} 
                        className="w-16 h-16 rounded-full"
                        alt="Lister"
                    />
                    <p className="text-sm text-right">{props.lister.name}</p>
                </div>
            </div>
        </div>
    );
}
