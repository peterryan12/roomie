import { MongoClient } from "mongodb";

interface PersonalInfo {
    hobbies: string;
    favoriteFact: string;
    petPeeve: string;
  }
  
  interface UserSchema {
    _id: string;  
    name: string;
    profilePic: string;
    age: number;
    rating: number;
    type: string; 
    bio: string;
    personalInfo: PersonalInfo;
    userName: string;
    email: string;
    status: string;
  }

  interface Property {
    _id:   string; 
    name: string;
    preview: string;
    price: number;
    description: string;
    images: string[]; 
    lister: UserSchema;
    rules: string;
  }

export class RoomieProvider {
    
    usersCollection = process.env.USERS_COLLECTION_NAME;
    housesCollection = process.env.HOUSES_COLLECTION_NAME;
     

    constructor(private readonly mongoClient: MongoClient) {}

    async getAllUsers(): Promise<UserSchema[]> {
        if (!this.usersCollection) {
            throw new Error("Missing collection names from environment variables");
        }
    
        const collection = this.mongoClient.db().collection<UserSchema>(this.usersCollection);
    
        return await collection.find({}).toArray(); // Fetch all users
    }

    async getUserByUsername(username: string): Promise<UserSchema | null> {
      if (!this.usersCollection) {
          throw new Error("Missing collection name from environment variables");
      }
  
      const collection = this.mongoClient.db().collection<UserSchema>(this.usersCollection);  
      console.log(username);
      return await collection.findOne({ userName: username });
  }

  async updateUserByUsername(username: string, updates: Partial<UserSchema>): Promise<UserSchema | null> {
    if (!this.usersCollection) {
        throw new Error("Missing collection name from environment variables");
    }

    const collection = this.mongoClient.db().collection<UserSchema>(this.usersCollection);
  
    const result = await collection.findOneAndUpdate(
        { "userName": username }, 
        { $set: updates },
        { returnDocument: "after" }
    );

    return result; // Returns the updated user or null if not found
}

    async getAllHouses(): Promise<Property[]> {
        if (!this.housesCollection) {
            throw new Error("Missing collection names from environment variables");
        }
    
        const collection = this.mongoClient.db().collection<Property>(this.housesCollection);
    
        return await collection.find({}).toArray(); // Fetch all users
    }

    // async updateImageName(imageId: string, newName: string): Promise<number> {
        
    //     if (!this.imagesCollection || !this.usersCollection) {
    //         throw new Error("Missing collection names from environment variables");
    //     }
    //     const collection = this.mongoClient.db().collection<ImageSchema>(this.imagesCollection);
    //     const result = await collection.updateOne({_id: imageId}, {$set: {name: newName}})
    //     return result.matchedCount;
        
    // }
    
}
