
let buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i ++) {
    handleClick(i)
}

function handleClick(i) { 
    buttons[i].addEventListener('click', function () {
        console.log(buttons[i].innerHTML);
    })
}
