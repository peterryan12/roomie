export const ProfileDropdown = () => {
    return <div className="bg-[rgb(255,253,208)] absolute right-6  mt-64 p-4 rounded border shadow-lg"> 
            <h1><u>John Cornelius Doe</u></h1>
            <ul>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button >Messages</button></li>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button className="hover:bg-[rgb(240,240,208)]">Edit Profile</button></li>
                <li className="p-1 hover:bg-[rgb(240,240,208)]"><button className="hover:bg-[rgb(240,240,208)]">Logout</button></li>
            </ul>
    </div>
}