//função que adiciona tarefa
function addTask() {
    // titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    //.value pq estou pegando o valor do input
    if(taskTitle) {

        //clona template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);
        
        //adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle;

        //remover as classes desnecessária
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adiciona tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        //limpar texto
        document.querySelector('#task-title').value = '';
    }
}

//evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    //evita que o formulário seja enviado antes do evento no front-end
    
    addTask();
})