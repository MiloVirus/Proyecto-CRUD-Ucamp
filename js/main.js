
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

let count = 0;
const submitData = () =>
{
   

    console.log("Pressed")
    let playerName = document.getElementById("playerName")
    let gameName = document.getElementById("gameName")

    let player_name = playerName.value
    let game_name = gameName.value

    let player = new Player(player_name, "" ,game_name, "")
    myPlayers.push(player)

    window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))
    JSON.parse(window.localStorage.getItem('myplayers') || "[]" );
    
   //Create Player Name Node

    const nodePlayerName = document.createElement('div');
    let playerNameLocale = JSON.parse(window.localStorage.getItem('myplayers')) // Parses JSON from Local storage
    const textnodePlayerName = document.createTextNode(playerNameLocale[count].playerName)
    nodePlayerName.appendChild(textnodePlayerName)
    document.getElementById("playerNameData").appendChild(nodePlayerName)

    //Create Player ID Node

    const nodePlayerId = document.createElement('div');
    let str = playerNameLocale[count].playerId.toString()
    const textnodePlayerId = document.createTextNode(str)
    nodePlayerId.appendChild(textnodePlayerId)
    document.getElementById("playerIdData").appendChild(nodePlayerId)

    // Create Game Name Node
    const nodeGame = document.createElement('div');
    const textnodeGame = document.createTextNode(playerNameLocale[count].gameName)
    nodeGame.appendChild(textnodeGame)
    document.getElementById("gameNameData").appendChild(nodeGame)

    //Create Status Node

    const nodeStatus = document.createElement('div');
    const textnodeStatus = document.createTextNode(playerNameLocale[count].status)
    nodeStatus.appendChild(textnodeStatus)
    document.getElementById("statusData").appendChild(nodeStatus)
        
    console.log(myPlayers)

    const form = document.getElementById('my_form');

    form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    form.reset();
    });

    count++
    
}

function onLoad()
{
    let local = JSON.parse(window.localStorage.getItem('myplayers'))
    console.log(local)
    for (let i = 0; i < local.length; i++)
    {
        console.log(local[i].playerName)
        const nodePlayerName = document.createElement('div');
        let playerNameLocale = JSON.parse(window.localStorage.getItem('myplayers'))

        const textnodePlayerName = document.createTextNode(playerNameLocale[i].playerName)
        nodePlayerName.appendChild(textnodePlayerName)
        document.getElementById("playerNameData").appendChild(nodePlayerName)

        const nodePlayerId = document.createElement('div');
        let str = playerNameLocale[i].playerId.toString()
        const textnodePlayerId = document.createTextNode(str)
        nodePlayerId.appendChild(textnodePlayerId)
        document.getElementById("playerIdData").appendChild(nodePlayerId)
    }
}


