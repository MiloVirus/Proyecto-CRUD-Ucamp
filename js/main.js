class Player
{
    constructor(index, playerName, game)
    {
        this.playerIndex = index
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
        if (status == "active")
            {
                document.getElementById("statusData").style.color="green";
            }
            else
            {
                document.getElementById("statusData").style.color="red";
            }
        

        return status
    }
    delete()
    {   
        console.log(this.playerIndex)
        
        for( var i = 0; i < myPlayers.length; i++){ 
            console.log(myPlayers[i].playerIndex)
            if (myPlayers[i].playerIndex === this.playerIndex) { 

                myPlayers.splice(i , 1)
                var row = document.getElementById("containerDataCrud"+this.playerIndex);
                row.parentNode.removeChild(row);
        
            }
        
        }
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))
        console.log(myPlayers)
        
    }
    edit()
    {
        console.log("Click Edit")
        for( var i = 0; i < myPlayers.length; i++){ 
            
            if (myPlayers[i].playerIndex === this.playerIndex) { 

                let playerName = document.getElementById("playerName")
                let gameName = document.getElementById("gameName")

                myPlayers[i].playerName = playerName.value
                myPlayers[i].gameName = gameName.value
        
            }
        }
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))

    }
}

const myPlayers = [
    
    
]

let count = 0;

const submitData = (playerName, gameName) =>
{
    
    playerName = document.getElementById("playerName")
    gameName = document.getElementById("gameName")

    let player = new Player(count, playerName.value, gameName.value)
    myPlayers.push(player)
    
    console.log(myPlayers)
    window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))

    JSON.parse(window.localStorage.getItem('myplayers') || "[]" );
    
    const container = document.createElement('div')
    container.classList.add("row")
    container.setAttribute('id', 'containerDataCrud'+ count);
    document.getElementById("containerCrud").appendChild(container)
    
   //Create Player Name Node

    const nodePlayerName = document.createElement('div');
    nodePlayerName.classList.add("col")
    let playerNameLocale = JSON.parse(window.localStorage.getItem('myplayers')) // Parses JSON from Local storage
    const textnodePlayerName = document.createTextNode(playerNameLocale[count].playerName)
    nodePlayerName.appendChild(textnodePlayerName)
    container.appendChild(nodePlayerName)

    //Create Player ID Node

    const nodePlayerId = document.createElement('div');
    nodePlayerId.classList.add("col")
    let str = playerNameLocale[count].playerId.toString()
    const textnodePlayerId = document.createTextNode(str)
    nodePlayerId.appendChild(textnodePlayerId)
    container.appendChild(nodePlayerId)

    // Create Game Name Node
    const nodeGame = document.createElement('div');
    nodeGame.classList.add("col")
    const textnodeGame = document.createTextNode(playerNameLocale[count].game)
    nodeGame.appendChild(textnodeGame)
    container.appendChild(nodeGame)

    //Create Status Node

    const nodeStatus = document.createElement('div');
    nodeStatus.classList.add("col")
    const textnodeStatus = document.createTextNode(playerNameLocale[count].status)
    nodeStatus.appendChild(textnodeStatus)
    container.appendChild(nodeStatus)

    //Create Eliminate Button
    const nodeButtonEliminate = document.createElement('div');
    const btnEliminate = document.createElement("button");
    btnEliminate.innerHTML = "Eliminate";
    btnEliminate.classList.add("btn")

    btnEliminate.onclick = function deletePlayer()
    {
        player.delete()
    }

    nodeButtonEliminate.classList.add("col")
    nodeButtonEliminate.appendChild(btnEliminate)
    container.appendChild(nodeButtonEliminate);


    //Create Edit Button
    const nodeButtonEdit = document.createElement('div');
    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    nodeButtonEdit.classList.add("col")
    btnEdit.classList.add("btn")

    btnEdit.onclick = function editPlayer()
    {
        player.edit()
        
    }
    nodeButtonEdit.appendChild(btnEdit)
    container.appendChild(nodeButtonEdit);
        

    const form = document.getElementById('my_form');

    form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    form.reset();
    });

    count++
}





