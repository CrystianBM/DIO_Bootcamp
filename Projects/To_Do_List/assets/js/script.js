const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

//quando clicar no botão de submit, manipula o valor do input e reseta o valor do mesmo
form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

//cria os task-items, define seus atributos e adiciona em uma lista
function addTask(description) {

    //criando os elemento para manipular e guardando o valor recebido da função
	const taskContainer = document.createElement('div'); 
	const newTask = document.createElement('input'); 
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

    //definindo atributos e montando o item (juntar a checkbox com o nome do item)
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

    //adicionando o item completo na lista
	taskList.appendChild(taskContainer);
}