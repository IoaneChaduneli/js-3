// dom
// let newPElement=document.createElement('P');
// newPElement.setAttribute('class','description');
// newPElement.textContent='hello world'
// newPElement.style.color='green'

// document.getElementById('wraper').appendChild(newPElement);

// let Newdivelement=document.createElement('div');
// Newdivelement.setAttribute('class', 'newdiv');

let newAelement=document.createElement('a');
newAelement.setAttribute('href', 'https://google.com');
newAelement.setAttribute('target', '_blank');
newAelement.classList.add('link', 'link2');
newAelement.classList.replace('link2', 'googlelink');
newAelement.classList.remove('link');
newAelement.textContent='Google Link';

// Newdivelement.appendChild(newAelement);
// document.getElementById('wraper').appendChild(Newdivelement);

// document.querySelector('.wraper-block').appendChild();
// document.querySelectorAll('.wraper-block').appendChild();

// document.querySelectorAll('.block')[1].appendChild(newAelement);
// document.querySelectorAll('.block').forEach(function(item){
//     let newAelement=document.createElement('a');
//     newAelement.setAttribute('href', 'https://google.com');
//     newAelement.setAttribute('target', '_blank');
//     newAelement.classList.add('link', 'link2');
//     newAelement.classList.replace('link2', 'googlelink');
//     newAelement.classList.remove('link');
//     newAelement.textContent='Google Link';
//     item.appendChild.newAelement;
// })


// events

document.getElementById('wraper').addEventListener('mouseover', function(){
    wraper
});

document.getElementById('wraper').addEventListener('click', function(){
    document.body.classList.toggle('body-class')
})