document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      if (username && password) {
        localStorage.setItem('username', username);
        window.location.href = 'todo.html';
      } else {
        alert('Please enter both username and password.');
      }
    });
  }

  const todoForm = document.getElementById('todoForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (todoForm) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach((task) => addTaskToDOM(task.text, task.done));

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = taskInput.value.trim();
      if (task) {
        addTaskToDOM(task, false);
        saveTask(task, false);
        taskInput.value = '';
      }
    });

    taskList.addEventListener('click', (e) => {
      const taskItem = e.target.parentElement;
      const taskText = taskItem.firstChild.textContent;

      if (e.target.classList.contains('delete-btn')) {
        taskItem.remove();
        removeTask(taskText);
      } else if (e.target.classList.contains('done-btn')) {
        taskItem.classList.toggle('done');
        toggleTaskDone(taskText);
      }
    });
  }

  function addTaskToDOM(task, isDone) {
    const li = document.createElement('li');
    li.textContent = task;
    if (isDone) li.classList.add('done');

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.classList.add('done-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  function saveTask(task, isDone) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: task, done: isDone });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((t) => t.text !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function toggleTaskDone(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex((t) => t.text === task);
    if (taskIndex > -1) {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
});
