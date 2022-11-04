let modelCardContainer = document.querySelector('#model-card-container');
let menu = document.querySelector('.menu');

let modelData = ['lamduan', 'champaka', 'unicorn'];

// loop through model array
for (i = 0; i < modelData.length; i++) {
   
    //display images
    let modelCard = document.createElement('div');
    modelCard.innerHTML = `<img src='./assets/illustrations/${modelData[i]}-line.png' class='model-card'>`;
    modelCardContainer.append(modelCard);

    //generate menu buttons
    let menuButton = document.createElement('div');
    menuButton.innerHTML = `<button class='menu-button'>${modelData[i]}</button>`;
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

