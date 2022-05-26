function destacaTarefa(evento) {
  const alvo = evento.target;

  const todosLi = document.getElementsByTagName('li');

  for (let index = 0; index < todosLi.length; index += 1) {
    todosLi[index].removeAttribute('style');
  }

  alvo.style.backgroundColor = 'rgb(128, 128, 128)';
}

function marcaTarefaCompleta(evento) {
  const alvo = evento.target;
  console.log(alvo);

  if (alvo.className !== 'completed') {

    console.log(alvo.className);
    alvo.className = 'completed';
  } else {
    alvo.className = '';
  }
}

function addTarefa() {
  const txtTarefa = document.getElementById('texto-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  const tagLi = document.createElement('li');

  tagLi.addEventListener('click', destacaTarefa);
  tagLi.addEventListener('dblclick', marcaTarefaCompleta);
  tagLi.innerText = txtTarefa.value;
  txtTarefa.value = '';

  listaTarefa.appendChild(tagLi);
}

document.getElementById('criar-tarefa').addEventListener('click', addTarefa);
