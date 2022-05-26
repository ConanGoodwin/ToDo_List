function destacaTarefa(evento) {
  evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addTarefa() {
  const txtTarefa = document.getElementById('texto-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  const tagLi = document.createElement('li');

  tagLi.addEventListener('click', destacaTarefa);
  tagLi.innerText = txtTarefa.value;
  txtTarefa.value = '';

  listaTarefa.appendChild(tagLi);
}

document.getElementById('criar-tarefa').addEventListener('click',addTarefa);
// rgb(128, 128, 128)