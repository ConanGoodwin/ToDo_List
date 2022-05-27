const listaTarefa = document.getElementById('lista-tarefas');
const todosLi = document.getElementsByTagName('li');

function destacaTarefa(evento) {
  const alvo = evento.target;

  for (let index = 0; index < todosLi.length; index += 1) {
    todosLi[index].removeAttribute('style');
  }

  alvo.style.backgroundColor = 'rgb(128, 128, 128)';
}

function marcaTarefaCompleta(evento) {
  const alvo = evento.target;

  if (alvo.className !== 'completed') {
    alvo.className = 'completed';
  } else {
    alvo.className = '';
  }
}

function addTarefa() {
  const txtTarefa = document.getElementById('texto-tarefa');
  const tagLi = document.createElement('li');

  tagLi.addEventListener('click', destacaTarefa);
  tagLi.addEventListener('dblclick', marcaTarefaCompleta);
  tagLi.innerText = txtTarefa.value;
  txtTarefa.value = '';

  listaTarefa.appendChild(tagLi);
}

function apagaTodasLi() {
  while (todosLi.length > 0) {
    listaTarefa.removeChild(todosLi[0]);
  }
}

function apagaLiRiscadas() {
  for (let index = 0; index < todosLi.length; index += 1) {
    if (todosLi[index].className === 'completed') {
      listaTarefa.removeChild(todosLi[index]);
      index -= 1;
    }
  }
}

function salvaLista() {
  localStorage.clear();
  console.log('oi');

  for (let index = 0; index < todosLi.length; index += 1) {
    localStorage.setItem(`txtLi${index}`, todosLi[index].innerText);
    localStorage.setItem(`classeLi${index}`, todosLi[index].className);
  }

  window.alert('Lista atual salva(inclusive se estiver vazia!).');
}

function recuperaLi() {
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length / 2; index += 1) {
      const tagLi = document.createElement('li');
      tagLi.innerHTML = localStorage.getItem(`txtLi${index}`);
      tagLi.className = localStorage.getItem(`classeLi${index}`);
      tagLi.addEventListener('click', destacaTarefa);
      tagLi.addEventListener('dblclick', marcaTarefaCompleta);
      listaTarefa.appendChild(tagLi);
    }
  }
}

window.onload = function setaPagina() {
  recuperaLi();
};

document.getElementById('criar-tarefa').addEventListener('click', addTarefa);
document.getElementById('apaga-tudo').addEventListener('click', apagaTodasLi);
document
  .getElementById('remover-finalizados')
  .addEventListener('click', apagaLiRiscadas);
document.getElementById('salvar-tarefas').addEventListener('click', salvaLista);
