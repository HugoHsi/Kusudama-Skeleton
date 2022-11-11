let modelCardContainer = document.querySelector('#model-card-container');
let menu = document.querySelector('.menu');
let selectedModel;

let modelData = ['baboon', 'bib', 'bozo', 'buttercup', 'champaka', 'chimneyw', 'colorslash', 'cupid', 'doubleslash', 'engage', 'lamduan', 'lipstick', 'littlefin', 'overlaphook', 'pansy', 'secretpocket', 'shuriken', 'stream', 'trap', 'triplegem', 'unicorn', 'vampire', 'venom', 'wrappetal'];

// loop through model array
for (i = 0; i < modelData.length; i++) {
   
    //display images
    let modelCard = document.createElement('div');
    modelCard.innerHTML = `<a href='./subpages/${modelData[i]}.html'><img src='./assets/illustration/${modelData[i]}-illustration.png' class='model-card'></br><h1 class='card-name'>${modelData[i]}</h1></a>`;
    modelCardContainer.append(modelCard);

    //create menu button
    let menuButton = document.createElement('div');
    menuButton.innerHTML = `<a href='./subpages/${modelData[i]}.html'><button class='menu-button'>${modelData[i]}</button></a>`;
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
