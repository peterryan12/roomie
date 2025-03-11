import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { RoomieProvider } from "../RoomieProvider";

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

