'use strict';

const list = ['pane', 'pasta', 'carote', 'p.cotto', 'germogli di soia', 'avocado']
const ul = document.querySelector('.list');

let itemContent = '';
let i = 0;
while(i < list.length){
    
    itemContent = document.createElement('li');
    console.log(itemContent);
    itemContent.append(list[i]);
    ul.append(itemContent);
    i++;
}

const input = document.getElementById('input');
const button = document.querySelector('#button');

button.addEventListener('click', function(){
    itemContent = document.createElement('li');
    itemContent.append(input.value);
    ul.append(itemContent);
})