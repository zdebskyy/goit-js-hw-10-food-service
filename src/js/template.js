import itemTemplate from '../handlebar/item.hbs';
import menu from '../menu.json';


const menuMarkup = itemTemplate(menu)

const jsMenu = document.querySelector('.js-menu');

jsMenu.insertAdjacentHTML("beforeend", menuMarkup)




// const uniqeId = menu.filter((el, ind, arr) => {
//     arr.indexOf(el.id) === ind.id;
// })

// console.log(uniqeId);