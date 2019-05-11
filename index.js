main = {};

main.value = '';

main.start = () => {
    document.getElementById('start').addEventListener('click', () => {

    })

}

main.valuesSelected = [];
main.clickX = () => {
    document.getElementById('x').addEventListener('click', ($event) => {
        document.getElementById('msg-error').innerText = '';
        main.value = ($event.target.id);
    });
}
main.click0 = () => {
    document.getElementById('o').addEventListener('click', ($event) => {
        document.getElementById('msg-error').innerText = '';
        main.value = $event.target.id;
    });
}

main.groupClick = () => {
    const elem = document.getElementsByClassName('rect');
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', ($event) => {
            main.startAlert($event);
            main.rectDom($event);
            main.win();
            2
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
    if (!$event.target.innerText && main.valuesSelected.length > 0 && main.valuesSelected.pop() == main.value) {
        document.getElementById('msg-error').innerText = 'Ups! now is another player';
        document.getElementById(idClicked).innerHTML = '';
        main.valuesSelected.push(main.value);

    } else {
        main.valuesSelected.push(main.value);
        document.getElementById(idClicked).innerHTML = `<p>${main.value}</p>`;
    }
}

main.win = () => {
    const mainObject = main.objectPlayer;
    const arrayOptions = ['x', 'o'];
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect1 == arrayOptions[i] && mainObject.rect4 == arrayOptions[i],
            mainObject.rect7 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';

        }

    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect2 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i],
            mainObject.rect8 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }

    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect3 == arrayOptions[i] && mainObject.rect6 == arrayOptions[i],
            mainObject.rect9 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect1 == arrayOptions[i] && mainObject.rect2 == arrayOptions[i],
            mainObject.rect3 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect4 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i],
            mainObject.rect6 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect7 == arrayOptions[i] && mainObject.rect8 == arrayOptions[i],
            mainObject.rect9 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
    }
    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect1 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i],
            mainObject.rect9 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
    }

    for (let i = 0; i < arrayOptions.length; i++) {
        if (mainObject.rect3 == arrayOptions[i] && mainObject.rect5 == arrayOptions[i],
            mainObject.rect7 == arrayOptions[i]) {
            document.getElementById('msg-error').innerText = 'Game Over';
        }
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
    main.clickX();
    main.click0();
    main.groupClick();
    main.win();
}

window.onload = () => {
    main.init();

}

