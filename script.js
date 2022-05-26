function addTarefa() {
  const txtTarefa = document.getElementById('texto-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  const tagLi = document.createElement('li');

  tagLi.innerText = txtTarefa.value;
  txtTarefa.value = "";

  listaTarefa.appendChild(tagLi);
}

document.getElementById('criar-tarefa').addEventListener('click',addTarefa);