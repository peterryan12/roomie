import loremImage from '../assets/lorem.png';


export const ProfileOverview = () => {
    return <div>
    <div id="meta-container"  className="flex flex-col items-center gap-4">
        <img src={loremImage} className='w-36 h-36 rounded-full border'></img>
        <div className='flex gap-3 items-center justify-center'>
        <p className='text-xl'>John Cornelius Doe, 47</p>
        
        </div>
        <p className='text-sm'>Roomie Rating: 4.96</p>
    </div>

    <div id="user-info" className='flex flex-col items-center mt-8 pb-15'>
       <div className='flex gap-4'> 
        <div className='h-fit w-100 p-6 border shadow-lg p-3 rounded bg-indigo-50'>
            <p>
                "We're all in the gutter, but some of us are <b />
                looking at the stars." - Oscar Wilde
                <b /> I'm a Los Osos native looking for a roomie to <b />
                to share my passion for kickboxing and smores. <b/>
                I also love dogs, so huge "bone-us" if you've got a pooch.
            </p>
         </div>
      </div>  
      <div className='flex flex-col  h-fit w-130 p-6 border shadow-lg p-3 rounded bg-indigo-50 mt-10 gap-3'>
        <p><u>Hobbies:</u> Kickboxing, Bbq, Watercolor Painting</p>
        <p><u>Favorite Fact:</u> There were Woolie Mammoths on earth when the Pyramids were built</p>
        <p><u>Worst Pet Peeve:</u> When people walk really fast behind you.</p>
    </div>
    <div className='flex flex-col  h-fit w-130 p-6 border shadow-lg p-3 rounded bg-indigo-50 mt-10 gap-3'>
        <p><u>Username:</u> jcdoeboi</p>
        <p><u>Email:</u> jcdoe@gmail.com</p>
        <p><u>Status:</u> Leaser-- Looking for Short to Medium Term</p>
    </div>
    </div>
  
</div>
}