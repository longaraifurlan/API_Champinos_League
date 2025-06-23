import * as httpResponse from "../utils/http-helper"
import * as repositiry from "../repositories/clubs-repository"

export const getClubService = async () => {
    const data = await repositiry.findAllClubs()
    const response = httpResponse.ok(data)
    return response
}