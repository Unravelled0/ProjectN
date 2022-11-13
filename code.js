let valuebox = document.querySelector('.value_list');
newNote();
new Sortable(valuebox);

let boxline = document.querySelector('.input_place');
let addbutton = document.querySelector('.action');
addbutton.addEventListener('click',newNote);

function newNote(){
    let box = document.createElement('div');
    let line = document.createElement('input');
    let click = document.createElement('button');
    
    box.className = 'note';
    line.className = 'input_place';
    click.innerHTML = 'x';
    click.className = 'delete';
    
    click.addEventListener('click', deleteNote);
    
    box.appendChild(line);
    box.appendChild(click);
    valuebox.appendChild(box);
    valuebox.scrollTop = valuebox.scrollHeight;
 }

document.addEventListener('keyup',(event) =>{    
    if(event.keyCode == 13) event.target.readOnly = true;
    event.target.scrollIntoView();    
})

function deleteNote(event){

    if(valuebox.childElementCount == 1){
        event.target.parentElement.firstChild.value = '';            
    }

    else{
        if(event.target.parentElement.firstChild.readOnly == true)
            event.target.parentElement.remove();
        
        else
            event.target.parentElement.firstChild.value = '';
    }
}