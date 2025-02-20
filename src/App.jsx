import './App.css'
import { FilterHeading } from './components/FilterHeading'
import { Header } from './components/Header'
import { ListingCard } from './components/ListingCard'
import { useState } from 'react'

function App() {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [numRooms, setNumRooms] = useState(3);

  return (
    <div className=" min-h-1/6  items-center">
      <Header />
      <div className="pt-24 p-5"> 
        <FilterHeading roomCount={numRooms} dropdownVisible={dropdownVisible} toggleDropdown={() => setDropdownVisible(!dropdownVisible)} toggleRooms={(rooms) => {setNumRooms(rooms)}}/>
        <ListingCard info={"Nice 2 bedroom loft in an up and coming neighborhood. "}/>
        <ListingCard info={"Highrise apartment in fashionable East Egg."} />
        <ListingCard info={"A cardboard bungalow at eighty a month."}/>

      </div>
    </div>
  )
}

export default App
