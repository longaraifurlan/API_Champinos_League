import { Request,Response } from "express"
import * as service from "../services/players-service"

export const getPlayer = async (req: Request, res: Response)=>{
    const httpResponse = await service.getPlayerService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerByPosition = async (req: Request, res: Response) =>{
    const position = req.params.position
    const httpResponse = await service.getPlayerByPositionService(position)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) =>{
    
}