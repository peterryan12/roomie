import './App.css';
import { FilterHeading } from './components/FilterHeading';
import { ProfileOverview } from './components/ProfileOverview';
import { Header } from './components/Header';
import { ListingCard } from './components/ListingCard';
import { useEffect, useState } from 'react';
import { Profile } from './components/Profile';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { DetailsPage } from './components/DetailsPage';
import loremImage from './assets/lorem.png';
import janeDoePic from './assets/janeDoe.jpeg';
import carraway from './assets/carraway.jpg';
import carraway2 from './assets/carraway_2.jpg';
import { UsernamePasswordForm } from './auth/UsernamePasswordForm';
import { RegisterPage } from './auth/RegisterPage';
import { LoginPage } from './auth/LoginPage';
import { ProtectedRoute } from './auth/ProtectedRoute';


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

const johnDoe = {
  name: "John Cornelius Doe",
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
  userName: "jcdoeboi",
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
  userName: "jcdoegorl",
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

function mapToUser(json: any): User {
  return {
    name: json.name || "",  // Fallback to empty string if missing
    profilePic: json.profilePic || "",
    rating: json.rating || 0,
    age: json.age || 0,
    type: json.type || "",
    bio: json.bio || "",
    personalInfo: {
      hobbies: json.personalInfo?.hobbies || "",
      favoriteFact: json.personalInfo?.favoriteFact || "",
      petPeeve: json.personalInfo?.petPeeve || ""
    },
    userName: json.userName || "",
    email: json.email || "",
    status: json.status || ""
  };
}

function mapToProperties(jsonArray: any[]): House[] {
  return jsonArray.map(json => ({
    name: json.name || "",  // Fallback to empty string if missing
    preview: json.preview || "",  // Fallback to empty string if missing
    price: json.price || 0,  // Fallback to 0 if missing
    description: json.description || "",  // Fallback to empty string if missing
    images: json.images || [],  // Fallback to an empty array if missing
    lister: mapToUser(json.lister),  // Reuse mapToUser for lister
    rules: json.rules || ""  // Fallback to empty string if missing
  }));
}





function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [numRooms, setNumRooms] = useState("1");
  const [user, setUser] = useState<User | null>(null);
  const [properties, setProperties] = useState<House[] | null>(null);
  const [currUser, setCurrUser] = useState(johnDoe);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const fetchCurrUser = async () => {
      if (!authToken) return; // Prevent fetching if no auth token
  
      try {
        const response = await fetch("/api/me", {
          headers: { Authorization: `Bearer ${authToken}` },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        console.log("Decoded");
  
        const data = await response.json();
        console.log("Fetched Users:", data);
        const updatedUser = mapToUser(data);
        setUser(updatedUser);
        setCurrUser(updatedUser);
       
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const fetchProperties = async () => {
      if (!authToken) return; // Prevent fetching if no auth token
  
      try {
        const response = await fetch("/api/properties", {
          headers: { Authorization: `Bearer ${authToken}` },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        console.log("Decoded");
  
        const data = await response.json();
        console.log("Fetched Users:", data);
        const updatedProperties = mapToProperties(data);
        setProperties(updatedProperties);
      
       
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };


    fetchCurrUser();
    fetchProperties();
  }, [authToken]);
  

  
  //document.body.classList.add('dark-mode');
  return (
    <Router>
      <div className="min-h-1/6 items-center">
        <Header currUser={user!} updateUserInfo = {setCurrUser}/>
        <div className="pt-24 p-5">
        <Routes>
          
            <Route path="/register" element={<RegisterPage setToken={setAuthToken}/>} />
            <Route path="/login" element={<LoginPage setToken={setAuthToken}/>} />

     
            <Route 
                path="/" 
                element={
                    <ProtectedRoute authToken={authToken}>
                        <>
                            <FilterHeading
                                roomCount={numRooms}
                                dropdownVisible={dropdownVisible}
                                toggleDropdown={() => setDropdownVisible(!dropdownVisible)}
                                toggleRooms={(rooms: string) => setNumRooms(rooms)}
                            />
                           {properties?.map((property) => {
          return <ListingCard listing={property} lister={property.lister} />;
        })}
                            {/* <ListingCard listing={properties ? properties[0] : carrawayHouse} lister={janeDoe} />
                            <ListingCard listing={carrawayHouse} lister={currUser} />
                            <ListingCard listing={carrawayHouse} lister={janeDoe} /> */}
                        </>
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/profile" 
                element={
                    <ProtectedRoute authToken={authToken}>
                        <Profile />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/details" 
                element={
                    <ProtectedRoute authToken={authToken}>
                        <DetailsPage />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/overview" 
                element={
                    <ProtectedRoute authToken={authToken}>
                        <ProfileOverview />
                    </ProtectedRoute>
                } 
            />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
