let buttonNewOrders = document.querySelector('.button__finger');
let inputTextOrder = document.querySelector('input');
let audioNo = document.querySelector('.no');
let audioPaper = document.querySelector('.paper');
let audioPencil = document.querySelector('.pencil');
let ul = document.querySelector('ul');
let buttonCheckAll = document.querySelector('.button__check');
let buttonRemoveAll = document.querySelector('.button__remove');
let envoyé = document.querySelector('.envoyé');

ul.innerHTML = localStorage.getItem('checkList');




buttonNewOrders.onclick = function () {
    if (inputTextOrder.value != '') {
        addOrder();
    } else {
        audioNo.play();
        setTimeout(() => {
            alert('Ecrivez quelque chose dans le champ de saisie');
        }, 100); 
    }
}
inputTextOrder.onkeydown = function (e) {
    if (e.code == "Enter") {
        if (inputTextOrder.value != '') {
            addOrder();
        } else {
            audioNo.play();
            setTimeout(() => {
                alert('Ecrivez quelque chose dans le champ de saisie');
            }, 100);
        }
    }
}

ul.onclick = function (e) {//quand on appuie sur ul une fonction demarre (e est une information a propos des clicks)
    let target = e.target;//element sur lequel on a clique
    if (target.tagName === 'I') {//si on a clique sur le tag li
        if (target.classList.contains('fa-trash-can')) {//si ce li a comme class fa-trash-can
            target.parentElement.remove();//alors on supprime l'element avec son parent c'est-a-dire avec le tag li
            localStorage.setItem('checkList', ul.innerHTML);
            audioPaper.play()
        }

        if (target.classList.contains('fa-circle-check')) {
            target.parentElement.classList.toggle('check');
            localStorage.setItem('checkList', ul.innerHTML);
            audioPencil.play()
        }
    }
}

function addOrder() {
    let li = document.createElement('li');
    let iTrush = document.createElement('i');
    iTrush.setAttribute('class', 'fa-regular fa-trash-can');
    let iCheck = document.createElement('i');
    iCheck.setAttribute('class', 'fa-regular fa-circle-check');
    let p = document.createElement('p');
    p.innerText = inputTextOrder.value;
    li.appendChild(iTrush);
    li.appendChild(iCheck);
    li.appendChild(p);
    ul.prepend(li);
    envoyé.play();
    inputTextOrder.value = '';
    localStorage.setItem('checkList', ul.innerHTML);
}

buttonCheckAll.onclick = function () {
    let allLi = ul.querySelectorAll('li');//variable dans lesquels tous les li apparaissent lorsqu'on appuie sur le bouton
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].classList.add('check')
    }
    audioPencil.play()
    localStorage.setItem('checkList', ul.innerHTML);
}

buttonRemoveAll.onclick = function () {
    let allLi = ul.querySelectorAll('li');//variable dans lesquels tous les li apparaissent lorsqu'on appuie sur le bouton
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].remove();
    }
    audioPaper.play()
    localStorage.setItem('checkList', ul.innerHTML);
}