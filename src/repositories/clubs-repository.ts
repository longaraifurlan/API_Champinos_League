import { ClubModel } from "../models/club-model"

const database = [
        {
            id: 1,
            name: "Real Madrid",
            country: "Spain",
            
        }
    ]

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database
}