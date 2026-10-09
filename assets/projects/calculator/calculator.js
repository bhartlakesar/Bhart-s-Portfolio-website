let input = document.querySelector("#inputbox");
let btns = document.querySelectorAll("button");

let string = "";

btns.forEach(button => {


    button.addEventListener("click", () => {

        let value = button.innerHTML;

        calculate(value);

    });


});

document.addEventListener("keydown", (e) => {


    let key = e.key;

    if (key >= "0" && key <= "9") {
        calculate(key);
    }

    else if (key == "+") {
        calculate("+");
    }

    else if (key == "-") {
        calculate("-");
    }

    else if (key == "*") {
        calculate("*");
    }

    else if (key == "/") {
        calculate("/");
    }

    else if (key == "%") {
        calculate("%");
    }

    else if (key == ".") {
        calculate(".");
    }

    else if (key == "Enter" || key == "=") {
        e.preventDefault();
        calculate("=");
    }

    else if (key == "Backspace") {
        e.preventDefault();
        calculate("DEL");
    }

    else if (key == "Escape") {
        calculate("AC");
    }


});

function calculate(value) {


    if (value == "=") {

        if (string != "") {
            string = eval(string);
            input.value = string;
        }

    }

    else if (value == "AC") {

        string = "";
        input.value = "";

    }

    else if (value == "DEL") {

        string = string.substring(0, string.length - 1);
        input.value = string;

    }

    else {

        string += value;
        input.value = string;

    }


}
