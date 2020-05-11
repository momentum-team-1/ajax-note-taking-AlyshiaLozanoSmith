//add new notes
//edit notes
//delete notes
//notes include: title, text, and timestamp most recently updated
//add priority?
//style as boxes?

let noteForm = document.querySelector('#notepad-form')
let notepadText = document.getElementById('notepad-text')
let noteValue = notepadText.value



noteForm.addEventListener('submit', function(){
    event.preventDefault()
    let notepadText = document.getElementById('notepad-text')
    let noteValue = notepadText.value 
    let titleText = document.getElementById('title-text')
    let titleValue = titleText.value
    //create new note in database
    notepadText.value = ''
    titleText.value = ''
    createNewNote(titleValue, noteValue)
})

//write fetch request to POST data
function createNewNote(titleContent, noteContent){
    return fetch('http://localhost:3000/notes/', {
        method: 'POST' ,
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({ title: titleContent, item : noteContent , createdAt: 'moment().format()'}
        )
    })
    .then((response) => {
        return response.json()
    })

}

function renderNotes(){
    notelist.innerHTML = ''
    fetch('http://localhost:3000/notes/', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(function(data){
        let list = document.createElement('ul')
        for (let item of data)
        let listItem = document.createElement('li') 
        listItem.dataset.id = item.id
        listitem.innertext = item.item
        list.appendChild(listItem)
    })
}
