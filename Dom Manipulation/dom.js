// let itemLister = document.querySelector('#header-title span');
// itemLister.style.display = 'inline-block';

// console.log(itemLister.style);

function addListItem() {
    let list = document.querySelector('#items');
    let newItem = document.createElement('li');
    newItem.classList.add('list-group-item');
    let text = document.querySelector('#newItem').value;
    let textnode = document.createTextNode(text);
    newItem.appendChild(textnode);
    items.appendChild(newItem);
}

// let itemList = [];