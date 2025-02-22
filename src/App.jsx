import './App.css';
import { FilterHeading } from './components/FilterHeading';
import { Header } from './components/Header';
import { ListingCard } from './components/ListingCard';
import { useState } from 'react';
import { Profile } from './components/Profile';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { DetailsPage } from './components/DetailsPage';


function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [numRooms, setNumRooms] = useState(3);

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
            
                  <ListingCard info={"Nice 2 bedroom loft in an up and coming neighborhood."} />
                  <ListingCard info={"Highrise apartment in fashionable East Egg."} />
                  <ListingCard info={"A cardboard bungalow at eighty a month."} />
                </>
              } 
            />
           
            <Route path="/profile" element={<Profile />} />
            <Route path="/details" element={<DetailsPage listingName={"Carraway House"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
