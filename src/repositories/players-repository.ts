import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78
        }
    },
    {
        id: 4,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 78,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86
        }
    },
    {
        id: 5,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 88,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 77
        }
    },
    {
        id: 6,
        name: "Neymar Jr.",
        club: "Al Hilal",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 87,
            Shooting: 83,
            Passing: 85,
            Dribbling: 93,
            Defending: 37,
            Physical: 62
        }
    },
    {
        id: 7,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 76,
            Passing: 89,
            Dribbling: 88,
            Defending: 72,
            Physical: 66
        }
    },
    {
        id: 8,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 89,
            Shooting: 94,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88
        }
    },
    {
        id: 9,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 93,
            Shooting: 86,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 10,
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nationality: "Belgium",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 50,
            Shooting: 30,
            Passing: 70,
            Dribbling: 60,
            Defending: 20,
            Physical: 85
        }
    },
    {
        id: 11,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 70,
            Shooting: 75,
            Passing: 86,
            Dribbling: 83,
            Defending: 83,
            Physical: 78
        }
    },
    {
        id: 12,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 77,
            Shooting: 80,
            Passing: 83,
            Dribbling: 85,
            Defending: 75,
            Physical: 82
        }
    },
    {
        id: 13,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 70,
            Shooting: 93,
            Passing: 83,
            Dribbling: 82,
            Defending: 47,
            Physical: 83
        }
    },
    {
        id: 14,
        name: "Rúben Dias",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 63,
            Shooting: 51,
            Passing: 70,
            Dribbling: 70,
            Defending: 89,
            Physical: 85
        }
    },
    {
        id: 15,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 77,
            Shooting: 72,
            Passing: 84,
            Dribbling: 89,
            Defending: 67,
            Physical: 70
        }
    },
    {
        id: 16,
        name: "Vinícius Jr.",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 95,
            Shooting: 82,
            Passing: 79,
            Dribbling: 92,
            Defending: 35,
            Physical: 74
        }
    },
    {
        id: 17,
        name: "Marc-André ter Stegen",
        club: "Barcelona",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 45,
            Shooting: 28,
            Passing: 70,
            Dribbling: 65,
            Defending: 22,
            Physical: 80
        }
    },
    {
        id: 18,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 74,
            Shooting: 84,
            Passing: 89,
            Dribbling: 84,
            Defending: 65,
            Physical: 77
        }
    },
    {
        id: 19,
        name: "João Cancelo",
        club: "Barcelona",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            Overall: 86,
            Pace: 85,
            Shooting: 70,
            Passing: 82,
            Dribbling: 84,
            Defending: 78,
            Physical: 74
        }
    }
];



export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const findPlayerByPosition = async (position: string): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.position === position);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id)

    if(index !== -1){
        database.splice(index, 1)
        return true
    }
    
    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex(player => player.id === id)

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex]
}