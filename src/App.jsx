import './App.css';
import { FilterHeading } from './components/FilterHeading';
import { ProfileOverview } from './components/ProfileOverview';
import { Header } from './components/Header';
import { ListingCard } from './components/ListingCard';
import { useState } from 'react';
import { Profile } from './components/Profile';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { DetailsPage } from './components/DetailsPage';
import loremImage from './assets/lorem.png';
import janeDoePic from './assets/janeDoe.jpeg';
import carraway from './assets/carraway.jpg';
import carraway2 from './assets/carraway_2.jpg';


function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [numRooms, setNumRooms] = useState(3);

  const johnDoe = {
    name: "John Doe",
    profilePic: loremImage,
    rating: 4.96,
    age: 47,
    type: "leaser",
    bio: "'Were all in the gutter, but some of us are looking at the stars.' - Oscar Wilde   I'm a Los Osos native looking for a roomie to share my passion for kickboxing and smores. I also love dogs, so huge 'bone-us' if you've got a pooch.",
    personalInfo: {
      hobbies: "Kickboxing, Bbq, Watercolor Painting",
      favoriteFact: "There were Woolie Mammoths on earth when the Pyramids were built",
      petPeeve: "When people walk really fast behind you."
    },
    username: "jcdoeboi",
    email: "jcdoe@gmail.com",
    status: "Looking for short to medium term renter."
  }
  const janeDoe = {
    name: "Jane Doe",
    profilePic: janeDoePic,
    age: 38,
    rating: 4.98,
    type: "leaser",
    bio: "'Life is a shipwreck, but we must not forget to sing in the lifeboats.' - Voltaire   I'm a Santa Barbara local looking for a roomie to share my love for music and taquitos. I also love cats, so it'd be 'prr-fect' if you've got a cat.",
    personalInfo: {
      hobbies: "Krav Maga, Swimming, Oil Painting",
      favoriteFact: "The Romans are to us what the Egyptians were to the Romans.",
      petPeeve: "When people take up too much of the sidewalk."
    },
    username: "jcdoegorl",
    email: "jcdoe@yahoo.com",
    status: "Looking for medium to long term renter."
  }

  const carrawayHouse = {
    name: "Carraway House",
    preview: "A cardboard bungalow at eighty a month.",
    price: 80,
    description: "This cardboard bungalow may be somewhat of an eyesore, but it posts gorgeous views of the Long Island Sound, as well as the consoling proximity of millionaires.",
    images: [carraway, carraway2],
    lister: janeDoe,
    rules: "No Smoking, No Pets, Quiet Hours 11P.M-7A.M"
  }



  return (
    <Router>
      <div className="min-h-1/6 items-center">
        <Header />
        <div className="pt-24 p-5">
          <Routes>
           
            <Route 
              path="/" 
              element={
                <>
                  <FilterHeading
                    roomCount={numRooms}
                    dropdownVisible={dropdownVisible}
                    toggleDropdown={() => setDropdownVisible(!dropdownVisible)}
                    toggleRooms={(rooms) => setNumRooms(rooms)}
                  />
            
                  <ListingCard listing={carrawayHouse} lister={janeDoe} />
                  <ListingCard listing={carrawayHouse} lister ={johnDoe}/>
                  <ListingCard listing={carrawayHouse} lister={janeDoe}/>
                </>
              } 
            />
           
            <Route path="/profile" element={<Profile />} />
            <Route path="/details" element={<DetailsPage listingName={"Carraway House"} leaser={janeDoe}/>} />
            <Route path="/overview" element={<ProfileOverview />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
