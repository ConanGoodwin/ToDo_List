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

document.getElementById('criar-tarefa').addEventListener('click', addTarefa);
document.getElementById('apaga-tudo').addEventListener('click', apagaTodasLi);
