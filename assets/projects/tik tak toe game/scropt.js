let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")





let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            box.style.textShadow = "0 0 1rem red"

            turnO = false;
        }

        else {
            box.innerText = "X";
            box.style.color = "red";
            box.style.textShadow = "0 0 1rem green"
            turnO = true;
        }

        box.disabled = true;
        checkWinner()

    });
});




const winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]


const dis = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const ena = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

let re = document.querySelector(".reset")
re.addEventListener("click", ena)

const checkWinner = () => {
    for (let pattren of winPattrens) {

        let pos1 = boxes[pattren[0]].innerText
        let pos2 = boxes[pattren[1]].innerText
        let pos3 = boxes[pattren[2]].innerText
        let msg = document.querySelector("#msg")


        if (pos1 != "" && pos2 != "" && pos3 != "") {

            if (pos1 === pos2 && pos2 === pos3 && pos3 === pos1) {

                console.log("Winner", `"${pos1}"`)
                msg.style.display = "block"
                dis()

            }
        }
    }
}
