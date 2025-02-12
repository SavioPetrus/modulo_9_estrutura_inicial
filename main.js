const form = document.getElementById('addTask');
const task = [];
const errorMsg = document.querySelector('.errorMsg');
const sucessMsg = document.querySelector('.sucessMsg');

let lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    errorMsg.style.display = 'none';
    sucessMsg.style.display = 'none';
    newTask();
    refreshList();
});

function newTask(){
    const inputTask = document.getElementById('taskName');
    inputTask.value = inputTask.value.toUpperCase();
    if(inputTask.value === ''){
        errorMsg.innerText = 'Por favor preencha o nome da tarefa';
        errorMsg.style.display = 'block';
        return
    }else if(task.includes(inputTask.value)){
        errorMsg.innerText = `A tarefa: ${inputTask.value} já está na lista`;
        errorMsg.style.display = 'block';
    }else{
        sucessMsg.innerText = 'Nova tarefa registrada!';
        sucessMsg.style.display = 'block';
        task.push(inputTask.value);

        let line = '<ul>'
        line += `<li>${inputTask.value}</li>`
        line += `</ul>`

        lines += line;
    }
    

    inputTask.addEventListener('input', function(){
        sucessMsg.style.display = 'none';
        errorMsg.style.display = 'none';
    });

    inputTask.value = '';
}

function refreshList(){
    const listBody = document.querySelector('ul');
    listBody.innerHTML = lines;
}
