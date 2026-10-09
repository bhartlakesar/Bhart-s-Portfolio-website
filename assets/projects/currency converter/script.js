// const url = "https://official-joke-api.appspot.com/random_joke";
// const para = document.querySelector(".joke");
// const btn = document.querySelector(".btn")


// const getJoke = async () => {
//     console.log("getting data...");
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     para.innerText = `${data.setup} \n ${data.punchline}`;
// }
// getJoke();
// btn.addEventListener("click", getJoke)


// //---project (currency-converter)



const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".finalMsg")

document.addEventListener("load" , ()=>{
updateExchangeRate()
})



for (let select of dropdowns) {

    for (currCode in countryList) {


        let newOption = document.createElement("option")
        newOption.innerText = currCode
        newOption.value = currCode

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        }

        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }

        select.append(newOption)

    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })

}


const updateFlag = (element) => {
    let currCode = element.value
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}

btn.addEventListener("click",(evt) => {
    evt.preventDefault();
updateExchangeRate()


})

const updateExchangeRate = async () => {
     let amt = document.querySelector(".amt input")
    let amtVal = amt.value

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amt.value = "1"
    }

    const URL = `${baseURL}currencies/${fromCurr.value.toLowerCase()}.json`;
    let responce = ((await fetch(URL)));
    let data = await responce.json()
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
    console.log(rate)
    console.log(amt)


    let finalAmt = amtVal * rate
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`
}