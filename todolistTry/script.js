const inputId = document.getElementById('texto-tarefa');
const olId = document.querySelector('#lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonDeleteEverything = document.getElementById('apaga-tudo');
const removeFinishedTask = document.getElementById('remover-finalizados');
const saveEveryFinishedTask = document.getElementById('salvar-tarefas');
const removeEverySavedTask = document.getElementById('remover-tarefas-salvas');
const buttonUp = document.getElementById('up');
const buttonDown = document.getElementById('down');

buttonCreateTask.addEventListener('click', () => {
  if (inputId.value === '') {
    alert('Escreva alguma tarefa!')
  } else {
  let li = document.createElement('li');
  localStorage.setItem('inputid', inputId.value);
  li.innerText = localStorage.getItem('inputid');
  olId.appendChild(li);
  li.className = 'lis'
  if(inputId.value.length > 0) {
    inputId.value = '';
      }
    }
  });

olId.addEventListener('click', (e) => {
  for (let i = 0; i < olId.children.length; i += 1) {
    if (olId.children[i] !== e.target) {
      olId.children[i].style.backgroundColor = 'white';
      olId.children[i].classList.remove('teste')
    }
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.classList.add('item')
  console.log(e.target)
});

olId.addEventListener('dblclick', (e) => {
  if(e.target.className !== 'completed') {
    e.target.classList.toggle('completed');
  }
});

function deleteEveryTask() {
buttonDeleteEverything.addEventListener('click', () => {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    olId.removeChild(olId.lastChild);
    }
  });
}
deleteEveryTask();

removeFinishedTask.addEventListener('click', () => {
  const finishedTasks = document.querySelectorAll('li');
  for (let index = 0; index < finishedTasks.length; index += 1) {
    if(finishedTasks[index].className === 'lis item completed') {
      finishedTasks[index].remove();
    }
  }
});

const listClick = document.getElementsByTagName('ol')[0];

saveEveryFinishedTask.addEventListener('click', () => {
  localStorage.setItem('listOfSavedItens', listClick.innerHTML);
});

function getTasks() {
  listClick.innerHTML = localStorage.getItem('listOfSavedItens');
}
getTasks();

removeEverySavedTask.addEventListener('click', () => {
  localStorage.clear();
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    olId.removeChild(olId.lastChild);
  }
});

buttonUp.addEventListener('click', () => {
  const li = document.querySelector('.item');
  console.log(li)
  if (li === null) return;
  olId.insertBefore(li, li.previousSibling);
});

buttonDown.addEventListener('click', () => {
  const li = document.querySelector('.item');
  if (li === null) return;
  olId.insertBefore(li.nextSibling, li);
});
