class Player
{
    constructor(playerName, playerId, game, status)
    {
        this.playerName = playerName
        this.playerId = this.generateId()
        this.game = game
        this.status = this.setStatus()
    }
    generateId()
    {
        let playerId = Math.floor(Math.random() * 100)
        return playerId
    }
    setStatus()
    {
        let status = "active"
        return status
    }
}

const myPlayers = [
    
    
]
const submitData = () =>
{
    console.log("Pressed")
    let playerName = document.getElementById("playerName")
    let gameName = document.getElementById("gameName")

    let player_name = playerName.value
    let game_name = gameName.value

    let player = new Player(player_name, "" ,game_name, "")
    myPlayers.push(player)
    

    const nodePlayerName = document.createElement('div');
    const textnodePlayerName = document.createTextNode(player.playerName)
    nodePlayerName.appendChild(textnodePlayerName)
    document.getElementById("playerNameData").appendChild(nodePlayerName)

    const nodePlayerId = document.createElement('div');
    let str = player.playerId.toString()
    const textnodePlayerId = document.createTextNode(str)
    nodePlayerId.appendChild(textnodePlayerId)
    document.getElementById("playerIdData").appendChild(nodePlayerId)

    const nodeGame = document.createElement('div');
    const textnodeGame = document.createTextNode(player.game)
    nodeGame.appendChild(textnodeGame)
    document.getElementById("gameNameData").appendChild(nodeGame)

    const nodeStatus = document.createElement('div');
    const textnodeStatus = document.createTextNode(player.status)
    nodeStatus.appendChild(textnodeStatus)
    document.getElementById("statusData").appendChild(nodeStatus)
        
    
    console.log(myPlayers)

    
    

    
}


