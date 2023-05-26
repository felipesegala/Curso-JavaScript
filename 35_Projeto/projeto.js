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
        newTask.classlist.remove('template');
        newTask.classlist.remove('hide');
    }
}

//evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    //evita que o formulário seja enviado antes do evento no front-end
    
    addTask();
})