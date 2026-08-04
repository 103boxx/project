const alertMessage = ['할 일이 추가되었습니다!', '당신의 하루를 응원합니다!', '오늘도 화이팅!'];

function addTodo() {
    const newTodoInput = document.getElementById('newTodo');
    const newTodo = newTodoInput.value;
    const todoList = document.getElementById('todoList');

    alert(getRandomAlert());
    todoList.innerHTML += '<li style="list-style-type:none;"> <input type="checkbox"> ' + newTodo + '</input></li>';
    document.getElementById('newTodo').value = '';

}


function deleteTodo() {
    const todoList = document.getElementById('todoList');
    const checkboxes = todoList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentElement.remove();
        }
    });

}


function getRandomAlert() {
    let randomIndex = Math.floor(Math.random() * alertMessage.length);
    return alertMessage[randomIndex];
}
