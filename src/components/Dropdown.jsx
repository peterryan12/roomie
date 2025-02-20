import { useState } from "react"

export const Dropdown = (props) => {

    const [userCity, setUserCity] = useState("Los Osos");
    const [numRooms, setNumRooms] = useState(0);

    return <div className="bg-[rgb(255,253,208)] absolute rounded left-0  mt-28  w-fit flex flex-col gap-1 p-1 -ml-10 border shadow-lg">
            <input type="text" placeholder="City to search..." className="w-30 border-b-[0.5px]" onChange={(e) => setUserCity(e.target.value)}/>
            {console.log(userCity)}
            <select id="options" name="options" onChange={(e) => {setNumRooms(e.target.value)}}>
                <option value="1">1 room</option>
                <option value="2">2 rooms</option>
                <option value="3+">3+ rooms</option>
            </select>
            <button className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={() => {
                props.toggleRooms(numRooms);    
                props.toggleCity(userCity);
                props.toggleDropdown();
                }}>Update</button>
    </div>
}