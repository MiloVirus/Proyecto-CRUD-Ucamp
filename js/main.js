class Player
{
    constructor(index, playerName, playerId, game, status)
    {
        this.playerIndex = index
        this.playerName = playerName
        this.playerId = playerId
        this.game = game
        this.status = status
    }
    
    changeStatus()
    {
        if(this.status === "active")
        {
            for( var i = 0; i < myPlayers.length; i++){ 

    
                if (myPlayers[i].playerIndex === this.playerIndex) { 
    
                   myPlayers[i].status = "inactive"    
                }
            }   
        }
        if(this.status === "inactive")
        {
            for( var i = 0; i < myPlayers.length; i++){ 

    
                if (myPlayers[i].playerIndex === this.playerIndex) { 
                    
                    myPlayers[i].status = "active"
                  
                }
            }  
        }
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))
        retrieveData()
    }
    
    delete()
    {   
        for( var i = 0; i < myPlayers.length; i++){ 


            if (myPlayers[i].playerIndex === this.playerIndex) { 

                myPlayers.splice(i , 1)
                var row = document.getElementById("containerDataCrud"+this.playerIndex);
                row.parentNode.removeChild(row);
            }
        }
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))  
    }

    edit()
    {

        for( var i = 0; i < myPlayers.length; i++){ 
            
            if (myPlayers[i].playerIndex === this.playerIndex) { 

                let playerName = document.getElementById("playerName")
                let gameName = document.getElementById("gameName")
               

                myPlayers[i].playerName = playerName.value
                myPlayers[i].game = gameName.value 

            }
        }
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))
        JSON.parse(window.localStorage.getItem('myplayers'));   
        retrieveData()
    }
}

const myPlayers = []

let count = 0;

const submitData = (playerName, gameName) =>
{
    playerName = document.getElementById("playerName")
    gameName = document.getElementById("gameName")

    let player = new Player(count, playerName.value, Math.floor(Math.random() * 100),gameName.value, "active")

    myPlayers.push(player)
    window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))
    retrieveData()
    count++
}

const retrieveData = () =>
{
    let playerNameLocale =  JSON.parse(window.localStorage.getItem('myplayers'));

    playerNameLocale.forEach((element, index) => {

            
            if(document.getElementById('containerDataCrud'+ index) == null)
            {
                
            }
            else
            {
                const elementEdit = document.getElementById('containerDataCrud'+ index)
                elementEdit.remove()
            }
            
            let player = new Player(playerNameLocale[index].playerIndex, playerNameLocale[index].playerName, playerNameLocale[index].playerId, playerNameLocale[index].game, playerNameLocale[index].status)

    
            const container = document.createElement('div')
            container.classList.add("row", "p-3")
            container.setAttribute('id', 'containerDataCrud'+ index);
            document.getElementById("containerCrud").appendChild(container)
            
            //Create Player Name Node

            const nodePlayerName = document.createElement('div');
            nodePlayerName.classList.add("col")
            const textnodePlayerName = document.createTextNode(playerNameLocale[index].playerName)
            nodePlayerName.appendChild(textnodePlayerName)
            container.appendChild(nodePlayerName)

            //Create Player ID Node

            const nodePlayerId = document.createElement('div');
            nodePlayerId.classList.add("col")
            const textnodePlayerId= document.createTextNode(playerNameLocale[index].playerId)
            nodePlayerId.appendChild(textnodePlayerId)
            container.appendChild(nodePlayerId)

            // Create Game Name Node
            const nodeGame = document.createElement('div');
            nodeGame.classList.add("col")
            const textnodeGame = document.createTextNode(playerNameLocale[index].game)
            nodeGame.appendChild(textnodeGame)
            container.appendChild(nodeGame)

            //Create Status Node

            const nodeButtonStatus = document.createElement('div');
            const btnStatus = document.createElement("button");
            btnStatus.innerHTML = playerNameLocale[index].status
            if(playerNameLocale[index].status == "active")
            {
                btnStatus.classList.add("btn","btn-success")
                
            }
            else{
                btnStatus.classList.add("btn","btn-danger")
                container.classList.add("text-bg-secondary", "p-3")
            }
            

            btnStatus.onclick = function statusPlayer()
            {   
                
                player.changeStatus()
            }

            nodeButtonStatus.classList.add("col")
            nodeButtonStatus.appendChild(btnStatus)
            container.appendChild(nodeButtonStatus);

            //Create Eliminate Button
            const nodeButtonEliminate = document.createElement('div');
            const btnEliminate = document.createElement("button");
            btnEliminate.innerHTML = "Eliminate";
            btnEliminate.classList.add("btn", "btn-class")

            btnEliminate.onclick = function deletePlayer()
            {
                player.delete()
                count = 0
            }

            nodeButtonEliminate.classList.add("col")
            nodeButtonEliminate.appendChild(btnEliminate)
            container.appendChild(nodeButtonEliminate);


            //Create Edit Button
            const nodeButtonEdit = document.createElement('div');
            const btnEdit = document.createElement("button");
            btnEdit.innerHTML = "Edit";
            nodeButtonEdit.classList.add("col")
            btnEdit.classList.add("btn", "btn-class")

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
        })
}
const compareName = (a, b) =>
{
    
    if (a.playerName.toLowerCase() < b.playerName.toLowerCase()) 
    {
        return -1
    }
    if (a.playerName.toLowerCase() > b.playerName.toLowerCase()) 
    {
        return 1
    }
    
    return 0
    
}
const compareStatus = (a, b) =>
{
    
    if (a.status.toLowerCase() < b.status.toLowerCase()) 
    {
        return -1
    }
    if (a.status.toLowerCase() > b.status.toLowerCase()) 
    {
        return 1
    }
    
    return 0
    
}

const sortData = () =>
{   
    console.log("sorting Name")
    let myPlayersArray = JSON.parse(window.localStorage.getItem('myplayers'));
    if (myPlayersArray == null)
    {

    }
    else{
        myPlayersArray.sort(compareName)
        console.log(myPlayersArray)
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayersArray))
        retrieveData()
    }
    
}

const sortDataStatus = () =>
{
    console.log("Sorting Status")
    let myPlayersArray = JSON.parse(window.localStorage.getItem('myplayers'));
    if (myPlayersArray == null)
    {

    }
    else{
        myPlayersArray.sort(compareStatus)
        console.log(myPlayersArray)
        window.localStorage.setItem('myplayers', JSON.stringify(myPlayersArray))
        retrieveData()
    }
    
}




