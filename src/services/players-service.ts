import * as PlayerRepository from "../repositories/players-repository"
import * as httpResponse from "../utils/http-helper"


export const  getPlayerService = async ()=>{
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if (data) {
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
     const data = await PlayerRepository.findPlayerById(id)
     let response = null

     if (data){
        response = httpResponse.ok(data)
     } else{
        response = httpResponse.noContent()
     }

     return response
}

export const getPlayerByPositionService = async (position: string) => {
     const data = await PlayerRepository.findPlayerByPosition(position)
     let response = null

     if (data){
        response = httpResponse.ok(data)
     } else{
        response = httpResponse.noContent()
     }

     return response
}
