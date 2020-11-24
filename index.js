addEventListener('mousedown', function () {
    let light_board = document.querySelectorAll('.light-board');

    for (let i = 0; i < light_board.length; i++) {
        let light = light_board[i].querySelectorAll('.light');

        let timerID = setInterval(function redColorLight() {
            for (let i = 0; i < light.length; i++) {
                if (i > 1) {
                    light[i].style.backgroundColor = 'red';
                }
            }
            timerID = setTimeout(redColorLight, 5000);
        }, 5000);
    }
});
