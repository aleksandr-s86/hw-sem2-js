//1
const supLink = document.getElementById('super_link');
console.log(supLink);

//2
const cardLink = document.querySelectorAll('.card-link')
cardLink.forEach(element => {
    element.textContent = 'Ссылка'
});

//3
const cardBody = document.querySelectorAll('.card-body>.card-link');
for (let i = 0; i < cardBody.length; i++) {
    console.log(cardBody[i]);
    
}
//4
const atribute =document.querySelector('[data-number="50"]');
console.log(atribute);
//5
const ttl = document.querySelector('title');
console.log(ttl);
//6
const parentCard = document.querySelector('.card-title');
console.log(parentCard);
const el = parentCard.parentNode
console.log(el);
//7
const paragraph = document.createElement('p');
paragraph.textContent = 'Привет';
const cardEl= document.querySelector('.card'); 
cardEl.prepend(paragraph);   
//8
const head6 = document.querySelector('h6');
head6.remove()