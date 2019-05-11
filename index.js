main = {};

main.value = '';

let gameNumber = new Array();

main.valuesSelected = [];
main.clickX = () => {
    document.getElementById('x').addEventListener('click', ($event) => {
        event.preventDefault();
        const msgWin = document.getElementById('msg-error').innerText;
        document.getElementById('msg-error').innerText = '';
        if (msgWin != undefined) {
            main.value = ($event.target.id);
        } else {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
    });
}
main.click0 = () => {
    document.getElementById('o').addEventListener('click', ($event) => {
        event.preventDefault();
        const msgWin = document.getElementById('msg-error').innerText;
        document.getElementById('msg-error').innerText = '';
        if (msgWin != 'Game Over') {
            main.value = ($event.target.id);
        }
    });
}

main.reset = () => {
    document.getElementById('reset').addEventListener('click', ($event) => {
        event.preventDefault();
        let msgWin = document.getElementById('msg-error').textContent;
        if (msgWin != undefined) {
            for (let i = 1; i < 9; i++) {
                document.getElementById(`rect${i}`).innerText = '';
            }
            window.location.reload(true)
        }
    });
}

main.groupClick = () => {
    const elem = document.getElementsByClassName('rect');
    event.preventDefault();
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', ($event) => {
            main.startAlert($event);
            main.rectDom($event);
            main.win();
        });
    }
}

main.startAlert = ($event) => {
    if (main.value == '') {
        document.getElementById('msg-error').innerText = 'Please select a simbol X or 0';
    } else {
        main.putValue($event);
    }

}

main.putValue = ($event) => { 
    const idClicked = $event.target.id;
    if (!$event.target.innerText && main.valuesSelected.length > 0 &&  main.valuesSelected.pop() == main.value) {
        document.getElementById('msg-error').innerText = 'Ups! now is another player';
        document.getElementById(idClicked).innerHTML = '';

    } else {
        main.valuesSelected.push(main.value);
        if(main.value == 'x') {
            document.getElementById(idClicked).style.color = 'red';
        }
        document.getElementById(idClicked).innerHTML = `<p>${main.value}</p>`;
    } 
}

main.win = () => {
    const mainObject = main.objectPlayer;
    const arrayOptions = ['x', 'o'];
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect1 == arrayOptions[i] && mainObject.rect4 == arrayOptions[i] &&
            mainObject.rect7 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]} has won!`;

        }

    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect2 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i] &&
            mainObject.rect8 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }

    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect3 == arrayOptions[i] && mainObject.rect6 == arrayOptions[i] &&
            mainObject.rect9 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect1 == arrayOptions[i] && mainObject.rect2 == arrayOptions[i] &&
            mainObject.rect3 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect4 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i] &&
            mainObject.rect6 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect7 == arrayOptions[i] && mainObject.rect8 == arrayOptions[i] &&
            mainObject.rect9 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect1 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i] &&
            mainObject.rect9 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }
    }

    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect3 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i] &&
            mainObject.rect7 == arrayOptions[i]) {
                document.getElementById('msg-error').innerText = `'Game Over the ${ arrayOptions[i]}`;
            }
    }
    gameNumber.push(main.value);
    if (gameNumber.length >= 10) {
        document.getElementById('msg-error').innerText = "Cats game!";
    }
}
main.rectDom = (event) => {
    const value = event.srcElement.innerText;
    const id = event.target.id;
    main.objectPlayer[id] = value;
}

main.objectPlayer = {};



main.clickGameArea = () => {

}

main.init = () => {
   document.getElementById('container').style.backgroundImage = "url('tee.jpeg')";
   document.getElementById('container').style.opacity = 0.1;
    main.clickX();
    main.click0();
    main.groupClick();
    main.win();
    main.reset();
}

window.onload = () => {
    main.init();

}

