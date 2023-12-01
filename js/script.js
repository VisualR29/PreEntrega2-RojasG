function Task(id, task, priority) {
    this.id = id;
    this.task = task;
    this.priority = priority;
}

let activate = true
let taskList = [];
let id = 0;
let opc = 0;

function addTask() {
    let taskTask = prompt("Ingrese la tarea a agregar: ");
    let priorityTask = +prompt("Ingrese la prioridad de la tarea");
    let idTask = id
    const newTask = new Task(idTask, taskTask, priorityTask);
    taskList.push(newTask);
    id += 1;
}

function deleteTask() {
    let idDelete = +prompt("Ingrese el 'id' de la tarea a eliminar");
    let newTaskList = taskList.filter(function (list) {
        return list.id !== idDelete;
    });
    taskList = newTaskList;
}

function showList() {
    let answer = ``
    taskList.forEach(element => {
        let idNumber = element.id;
        let task = element.task;
        let priority = element.priority;
        let elementAnswer = `${idNumber}: ${task}, prioridad de ${priority}\n`;
        answer += elementAnswer;
    });
    alert(`Lista de tareas:\n${answer}`);
}

while (activate) {
    opc = +prompt("Lista de tareas!\nIngrese el número de la opción\n1: Agregar tarea\n2: Eliminar tarea\n3: Ver la lista de tareas\n4:Cerrar la lista de tareas")
    if (opc == 1) {
        addTask();
    } else if (opc == 2) {
        deleteTask();
    } else if (opc == 3) {
        showList();
    } else {
        activate = false;
    }
}