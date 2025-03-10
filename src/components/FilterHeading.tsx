import { Dropdown } from "./Dropdown";
import { useState } from "react";
import { Menu } from "lucide-react";

interface IFilterHeadingProps {
        roomCount: string,
        dropdownVisible: boolean,
        toggleDropdown: () => void,
        toggleRooms: (rooms: string) => void,
}


export const FilterHeading = (props: IFilterHeadingProps) => {

    const [userCity, setUserCity] = useState("Los Osos");
    

    const toggleUserCity = (city: string) => {
        setUserCity(city);
    }

    return <div className="flex justify-between mt-5">
        <div className="flex gap-3 items-center ">
        <h1 className="text-3xl">{userCity}</h1>      
  <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin" id="spinner"></div>
  </div>
        <div className="flex items-center gap-1 relative">
        <div>{props.roomCount ? props.roomCount : 1} rooms</div>
        <button onClick={props.toggleDropdown}> <Menu size={20} /></button>
        {props.dropdownVisible ? <Dropdown toggleRooms={props.toggleRooms} toggleCity = {toggleUserCity} toggleDropdown={props.toggleDropdown}/> : null}
          </div>
       
    </div>
}