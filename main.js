const errorMsg = document.querySelector('.errorMsg');
const sucessMsg = document.querySelector('.sucessMsg');
const task = [];

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        errorMsg.style.display = 'none';
        sucessMsg.style.display = 'none';
        const novaTarefa = $('#taskName').val().toUpperCase();
        const novoItem = $('<li></li>');
        if(novaTarefa === ''){
            errorMsg.innerText = 'Por favor preencha o nome da tarefa';
            errorMsg.style.display = 'block';
        }else if(task.includes(novaTarefa)){
            errorMsg.innerText = `A tarefa: ${novaTarefa} já está na lista`;
            errorMsg.style.display = 'block';
        }else{
            sucessMsg.innerText = 'Nova Tarefa registrada!';
            sucessMsg.style.display = 'block';
            task.push(novaTarefa);
            $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
            $(novoItem).appendTo(`ul`);
        }
        
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('tachado');
    });
})
