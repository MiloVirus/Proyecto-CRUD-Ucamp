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
        let playerNameLocale = JSON.parse(window.localStorage.getItem('myplayers'));

        console.log(myPlayers)
        console.log(playerNameLocale)    
        retrieveData()
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
    retrieveData()
}

const retrieveData = () =>
{
    let playerNameLocale =  JSON.parse(window.localStorage.getItem('myplayers'));
    playerNameLocale.forEach((element, index) => {

            let player = new Player(playerNameLocale[index].playerIndex, playerNameLocale[index].playerName, playerNameLocale[index].playerId, playerNameLocale[index].game, playerNameLocale[index].status)
            if(document.getElementById('containerDataCrud'+index) == null)
            {
                console.log("it's null")
            }
            else
            {
                const elementEdit = document.getElementById('containerDataCrud'+ index)
                //console.log(elementEdit)
                elementEdit.remove()
            }
            
    
            const container = document.createElement('div')
            container.classList.add("row")
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
            let str = playerNameLocale[index].playerId.toString()
            const textnodePlayerId = document.createTextNode(str)
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
            const textnodeStatus = document.createTextNode(playerNameLocale[index].status)
            btnStatus.innerHTML = textnodeStatus
            btnStatus.classList.add("btn","btn-success")

            btnStatus.onclick = function deletePlayer()
            {

            }

            nodeButtonStatus.classList.add("col")
            nodeButtonStatus.appendChild(btnStatus)
            container.appendChild(nodeButtonStatus);

            //Create Eliminate Button
            const nodeButtonEliminate = document.createElement('div');
            const btnEliminate = document.createElement("button");
            btnEliminate.innerHTML = "Eliminate";
            btnEliminate.classList.add("btn")

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

            
        })
}
    






