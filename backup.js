/*

    window.localStorage.setItem('myplayers', JSON.stringify(myPlayers))
    JSON.parse(window.localStorage.getItem('myplayers') || "[]" );

    const container = document.createElement('div')
    container.classList.add("row")
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
    nodeButtonEdit.appendChild(btnEdit)
    container.appendChild(nodeButtonEdit);
        

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

   

    if (local != null)
    {   
        for (let i = 0; i < local.length ; i++)
        {
            if (local[i].status == "active")
            {
                document.getElementById("statusData").style.color="green";
            }
            else
            {
                document.getElementById("statusData").style.color="red";
            }
        // Creates player Name Node

        const nodePlayerName = document.createElement('div');
        let playerNameLocale = JSON.parse(window.localStorage.getItem('myplayers'))

        const textnodePlayerName = document.createTextNode(playerNameLocale[i].playerName)
        nodePlayerName.appendChild(textnodePlayerName)
        document.getElementById("playerNameData").appendChild(nodePlayerName)

        // Creates player ID Node

        const nodePlayerId = document.createElement('div');
        let str = playerNameLocale[i].playerId.toString()
        const textnodePlayerId = document.createTextNode(str)
        nodePlayerId.appendChild(textnodePlayerId)
        document.getElementById("playerIdData").appendChild(nodePlayerId)

        // Creates game Name Node
        const nodeGame = document.createElement('div');
        const textnodeGame = document.createTextNode(playerNameLocale[i].game)
        nodeGame.appendChild(textnodeGame)
        document.getElementById("gameNameData").appendChild(nodeGame)

        // Creates status Node

        const nodeStatus = document.createElement('div');
        const textnodeStatus = document.createTextNode(playerNameLocale[i].status)
        nodeStatus.appendChild(textnodeStatus)
        document.getElementById("statusData").appendChild(nodeStatus)
        
        //Create Eliminate Button

        const btnEliminate = document.createElement("button");
        btnEliminate.classList.add("btn")
        btnEliminate.innerHTML = "Eliminate";
        document.getElementById("eliminateData").appendChild(btnEliminate);


        //Create Edit Button

        const btnEdit = document.createElement("button");
        btnEdit.classList.add("btn")
        btnEdit.innerHTML = "Edit";
        document.getElementById("editData").appendChild(btnEdit);
        

        }
    }
    else 
    {
        console.log("Local has no values")
    }
    
}
*/

