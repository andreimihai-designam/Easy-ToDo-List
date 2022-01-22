// gain access to container (.to-do-items)
// gain access to input (#input)
// gain access to the delete task icon
// I. Create the varialbes that are needed:
const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

// II. Create a event listener on the input box, so the user can click on it:

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        addItem();
})

// III. Create the function above:
function addItem(){
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgrey';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen';
    })

    divChild.appendChild(checkIcon);
    
    function deleteCheck (e) {
        const item = e.target;
        //DELETE TODO
        if(item.classList[0] === 'trash-btn') {
            const todo = item.parentElement; //to remove the todo item parent
            //ANIMATION
            todo.classList.add('fall');
            todo.addEventListener('transitionend', function(){
                todo.remove();
            });
        }
    }

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'lightgrey';
    trashIcon.addEventListener('click', function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);

    input.value = '';
    
}