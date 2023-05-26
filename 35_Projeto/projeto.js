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

        //evento de remover 
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);
        })

        //adiciona evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this);
        }) 

        //limpar texto
        document.querySelector('#task-title').value = '';
    }
}

//função de completar tarefa
function completeTask(task) {
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle('done');
    //toggle verifica se o elemento tem a classe, se sim ele adiciona se não ele remove, parecido com if
}

//função de remover task
function removeTask(task) {
    task.parentNode.remove(true);
}

//evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    //evita que o formulário seja enviado antes do evento no front-end
    
    addTask();
})