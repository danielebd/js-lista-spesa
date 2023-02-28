'use strict';

const list = ['pane', 'pasta', 'carote', 'p.cotto', 'germogli di soia', 'avocado']
const ul = document.querySelector('.list');
console.log(list);
let itemContent = '';
let i = 0;
while(i < list.length){
    
    itemContent = document.createElement('li');
    console.log(itemContent);
    itemContent.append(list[i]);
    ul.append(itemContent);
    i++;
}