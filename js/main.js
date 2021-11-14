let square = document.createElement('div');

function paint_square_blue() {
    let blue_square = document.createElement('div');
    blue_square.style.height = '50px';
    blue_square.style.width = '50px';
    blue_square.style.margin = '10px';
    blue_square.style.background = '#0000FF';
    return blue_square;

}
setInterval(paint_square_blue, 3000, 10);


function paint_square_red(squar_red) {
    for (let i = 0; i < squar_red; i++) {
        let red_square = document.querySelectorAll('div')[i];
        red_square.style.height = '100px';
        red_square.style.width = '100px';
        red_square.style.margin = '10px';
        red_square.style.background = 'green';
    }
    return square;
}

for (let i = 0; i < 10; i++) {
    document.body.appendChild(paint_square_blue());
}
setTimeout(paint_square_red, 3000, 10);



function paint_square_red_and_yellow(square_green) {
    for (let i = 0; i < square_green; i++) {
        let square3 = document.querySelectorAll('div')[i];
        if (i % 3 - 2 === 0) {
            square3.style.height = '100px';
            square3.style.width = '100px';
            square3.style.margin = '10px';
            square3.style.background = 'red';
        } else {
            square3.style.background = 'yellow'
        }
    }
    return square;
}
for (let i = 0; i < 10; i++) {
    document.body.appendChild(paint_square_red_and_yellow());
}
setTimeout(paint_square_red_and_yellow, 6000, 10);

function delete_elements() {
    let delete_lements_all = document.querySelectorAll('div');
    for (let i = 0; i < delete_lements_all.length; i++) {
        delete_lements_all[i].remove();
    }
}
setTimeout(delete_elements, 9000);

function get_body_black() {
    document.body.style.background = 'black';
}
setTimeout(get_body_black, 12000);