let menu = document.querySelector('.menu');
let imageContainer = document.querySelector('#image-container');
let modelData = ['baboon', 'bib', 'bozo', 'buttercup', 'champaka', 'chimneyw', 'colorslash', 'cupid', 'doubleslash', 'engage', 'lamduan', 'lipstick', 'littlefin', 'overlaphook', 'pansy', 'secretpocket', 'shuriken', 'stream', 'trap', 'triplegem', 'unicorn', 'vampire', 'venom', 'wrappetal'];
let heading = document.querySelector('#heading');

let model = heading.textContent;

let imageType = document.querySelector('#image-type');
let imageTypeChildren = [
    document.querySelector('#selector-illustration'), 
    document.querySelector('#selector-crease'), 
    document.querySelector('#selector-skeleton')
];
let helpContainer = document.querySelector('#help-container');
let helpText = [
    'An illustration of the model. Hover over it to see the inner skeleton in purple.', 
    'The creases on the sheet of paper that make up the model. The two colors represent mountain and valley folds',
    'The central line that can be mapped onto the skeleton'
]

//let model = 'lamduan';
//heading.innerHTML = model;

// loop through model array
for (i = 0; i < modelData.length; i++) {
       //generate menu buttons
    let menuButton = document.createElement('div');
    menuButton.innerHTML = `<a href='./${modelData[i]}.html'><button class='menu-button'>${modelData[i]}</button></a>`;
    menu.append(menuButton);
}

menu.addEventListener('mouseover', () => {
    menu.classList.add('activated');
    document.querySelectorAll('.menu-button').forEach((button) => {
        button.style.display = 'block';
    })
})

menu.addEventListener('mouseout', () => {
    menu.classList.remove('activated');
    document.querySelectorAll('.menu-button').forEach((button) => {
        button.style.display = 'none';
    })
})

imageContainer.innerHTML = `
<img src='../assets/illustration/${model}-illustration.png' id='skeleton'>
<img src='../assets/crease/${model}-crease.png' class='crease'>
<img src='../assets/crease/${model}-skeleton.png' class='crease'>
`
let skele = document.querySelector('#skeleton');

skele.addEventListener('mouseover', () => {
    skele.setAttribute('src', `../assets/illustration/${model}-overlay.png`)
})

skele.addEventListener('mouseout', () => {
    skele.setAttribute('src', `../assets/illustration/${model}-illustration.png`)
})

function resetBold() {
    for (let i = 0; i < imageTypeChildren.length; i++) {
        imageTypeChildren[i].classList.remove('selected');
    }
}

function detectScrollPosition() {

if (window.scrollY > 1700) {
        imageTypeChildren[2].classList.add('selected');
        helpContainer.innerText = helpText[2];
    } else if (window.scrollY > 900) {
        imageTypeChildren[1].classList.add('selected');
        helpContainer.innerText = helpText[1];
    } else {
        imageTypeChildren[0].classList.add('selected');
        helpContainer.innerText = helpText[0];
    }
}

window.addEventListener('scroll', () => {resetBold(); detectScrollPosition();})