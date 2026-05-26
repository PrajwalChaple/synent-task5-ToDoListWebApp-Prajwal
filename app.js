document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const tasksContainer = document.getElementById('tasks-list');
  const progressRatio = document.getElementById('progress-ratio');

  let tasks = [];

  function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('taskflow_tasks');
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  function saveTasksToStorage() {
    localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
  }

  function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    progressRatio.textContent = completed + ' of ' + total + ' completed';
  }

  function init() {
    loadTasksFromStorage();
    updateProgress();
  }

  init();
});