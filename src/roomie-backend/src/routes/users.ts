import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { RoomieProvider } from "../RoomieProvider";
import { verifyAuthToken } from "./auth";

export function registerUserRoutes(app: express.Application, mongoClient: MongoClient) {
    // User route
    app.get("/api/users", async (req: Request, res: Response) => {
        try {
            let userId: string | undefined = undefined;
            if (typeof req.query.createdBy === "string") {
                userId = req.query.createdBy;
            }

            let users = {};
            if (mongoClient) {
                const provider = new RoomieProvider(mongoClient);
                users = await provider.getAllUsers();
            } else {
                const provider = new RoomieProvider(mongoClient);
                users = await provider.getAllUsers();
            }

            res.json(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send("Internal Server Error");
        }
    });

    app.get("/api/me", verifyAuthToken, async (req: Request, res: Response): Promise<void>  => {
        try {
          
            const provider = new RoomieProvider(mongoClient);
            const username = res.locals.token.username; // Extract username from decoded JWT
    
            const user = await provider.getUserByUsername(username); // Fetch user from DB
            if (!user) {
                res.status(404).json({ message: "User not found" })
                return ;
            }
            res.json(user); // Send the user as JSON
        } catch (error) {
            console.error("Error fetching current user:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
    });
    
    app.patch("/api/users/:username", async (req: Request, res: Response) => {
        try {
            console.log("In the patch enpoint");
            console.log(req.params);
            const { username } = req.params; 
            const updates = req.body; 
            
    
            if (!username || !updates || Object.keys(updates).length === 0) {
                res.status(400).json({ error: "Invalid request: No updates provided." });
                return;
            }
    
            const provider = new RoomieProvider(mongoClient);
            const updatedUser = await provider.updateUserByUsername(username, updates);
    
            if (!updatedUser) {
                 res.status(404).json({ error: "User not found." });
                 return;
            }
    
            res.json({ message: "User updated successfully", user: updatedUser });
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    

    // Property route (this was inside the users route block)
    app.get("/api/properties", async (req: Request, res: Response) => {
        try {
            let userId: string | undefined = undefined;
            if (typeof req.query.createdBy === "string") {
                userId = req.query.createdBy;
            }

            let properties = {};
            if (mongoClient) {
                const provider = new RoomieProvider(mongoClient);
                properties = await provider.getAllHouses();
            } else {
                const provider = new RoomieProvider(mongoClient);
                properties = await provider.getAllHouses();
            }

            res.json(properties);
        } catch (error) {
            console.error("Error fetching properties:", error);
            res.status(500).send("Internal Server Error");
        }
    });
}


// app.patch("/api/images/:id",  async (req: Request, res: Response) => {
   
//    if (!req.body.name){
//     res.status(400).send({
//         error: "Bad request",
//         message: "Missing name property"
//     });
//     return;
//    }
    
//     const provider = new ImageProvider(mongoClient);
//     const result = await provider.updateImageName(req.params.id, req.body.name);

//     if (result == 0){
//         res.status(404).send({
//             error: "Not found",
//             message: "Image does not exist"
//         });
//         return;
//     }
//     res.sendStatus(204);
   
// });

