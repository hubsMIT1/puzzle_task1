const Fbox = document.querySelectorAll('.boxM')
var colors = ["red", "green", "orange", "yellow", "blue", "white"];
// let emptybox = boxes[Math.floor(Math.random() * 9)];

var neighbourslists = [
    [2, 4], //1
    [1, 3, 5], //2
    [6], //3
    [1, 5, 7], //4
    [2, 4, 6, 8], //5
    [3, 9], //6
    [4, 8], //7
    [5, 7, 9], //8
    [6, 8], //9

]
for (let i = 0; i < 9; i++) {
    Fbox[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        // Fbox[i].innerHTML = `<strong style="font-size:1rem">${i + 1}</strong><br> `
}






const boxes = document.querySelectorAll('.box')
var color = ["red", "green", "orange", "yellow", "blue", "white"];
let emptybox = boxes[Math.floor(Math.random() * 25)];

var neighbourslist = [
    [2, 6], //1
    [1, 3, 7], //2
    [2, 4, 8], //3
    [3, 5, 9], //4
    [4, 10], //5
    [1, 7, 11], //6
    [2, 6, 8, 12], //7
    [3, 7, 9, 13], //8
    [4, 8, 10, 14], //9
    [5, 9, 15], //10
    [6, 12, 16], //11
    [7, 11, 13, 17], //12
    [8, 12, 14, 18], //13
    [9, 13, 15, 19], //14
    [10, 14, 20], //15
    [11, 17, 21, ], //16
    [12, 16, 18, 22], //17
    [13, 17, 19, 23], //18
    [14, 18, 20, 24], //19
    [15, 19, 25], //20
    [16, 22], //21
    [17, 21, 23], //22
    [18, 22, 24], //23
    [19, 23, 25], //24
    [20, 24], //25   
]
for (let i = 0; i < 25; i++) {
    boxes[i].style.backgroundColor = color[Math.floor(Math.random() * color.length)]
        // boxes[i].innerHTML = `<strong style="font-size:1rem">${i + 1}</strong><br> ${neighbourslist[i]}`
}
emptybox.style.backgroundColor = 'rgb(50, 50, 50)'

boxes.forEach((box, i) => {
    box.addEventListener('click', () => {
        if (neighbourslist[parseInt(emptybox.classList[1]) - 1].includes(parseInt(box.classList[1]))) {
            emptybox.style.backgroundColor = box.style.backgroundColor;
            box.style.backgroundColor = 'rgb(50, 50, 50)'
            emptybox = box;
            if (boxes[6].style.backgroundColor === Fbox[0].style.backgroundColor && boxes[7].style.backgroundColor === Fbox[1].style.backgroundColor && boxes[8].style.backgroundColor === Fbox[2].style.backgroundColor && boxes[11].style.backgroundColor === Fbox[3].style.backgroundColor && boxes[12].style.backgroundColor === Fbox[4].style.backgroundColor && boxes[13].style.backgroundColor === Fbox[5].style.backgroundColor && boxes[16].style.backgroundColor === Fbox[6].style.backgroundColor && boxes[17].style.backgroundColor === Fbox[7].style.backgroundColor && boxes[18].style.backgroundColor === Fbox[8].style.backgroundColor) {

                // document.querySelector("button").addEventListener("click", function() {


                //     const reloadButton = document.querySelector("#reload");

                //     function reload() {
                //         reload = location.reload();

                //     }
                //     reloadButton.addEventListener("click", reload, true);
                // })
                // document.querySelector(".btn").style.backgroundColor = rgb(0, 204, 0);
                document.querySelector('.win').innerHTML = " You  Win!";
            } else {
                document.querySelector('.win').textContent = " ";
            }
        }

    })
})
