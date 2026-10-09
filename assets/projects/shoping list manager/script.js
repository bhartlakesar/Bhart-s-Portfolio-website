const input = document.querySelector(".addItem input");
const addItemBtn = document.querySelector(".addItem button");
const ul = document.querySelector(".card ul");
const totalItems = document.querySelector(".lastCont p span");

addItemBtn.addEventListener("click", () => {
    if (input.value != ``) {
        ul.innerHTML = `<li>
                    <span>${input.value}</span>
                    <div>
                        <button class = 'complete'>Complete</button>
                        <button class = 'remove'>Delete</button>
                    </div>
                </li>`+ ul.innerHTML;
        totalItems.innerText = ul.children.length

    }
    input.value = ``;

    const complete = document.querySelectorAll(".complete")

    complete.forEach(el => {
        let show = false
        el.addEventListener("click", () => {
            if (show === false) {

                el.style.backgroundColor = "#289c4a"
                show = true

            }
            else {
                el.style.backgroundColor = "#2cb5551f"
                show = false
            }
        })
    });

    const remove = document.querySelectorAll(".remove")
    remove.forEach(el => {
        el.addEventListener("click", () => {
            let parent = el.parentElement;
            parent.parentElement.remove();
            totalItems.innerText = ul.children.length

        })
    })


});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        ul.innerHTML = ` <li>
                    <span>${input.value}</span>
                    <div>
                        <button class = 'complete'>Complete</button>
                        <button class = 'remove'>Delete</button>
                    </div>
                </li>`+ ul.innerHTML;
        totalItems.innerText = ul.children.length
        input.value.trim() !== ""

    }

    const complete = document.querySelectorAll(".complete")

    complete.forEach(el => {
        let show = false
        el.addEventListener("click", () => {
            if (show === false) {

                el.style.backgroundColor = "#289c4a";
                show = true

            }
            else {
                el.style.backgroundColor = "#2cb5551f";
                show = false
            }
        })
    });

    const remove = document.querySelectorAll(".remove")
    remove.forEach(el => {
        el.addEventListener("click", () => {
            let parent = el.parentElement;
            parent.parentElement.remove();
            totalItems.innerText = ul.children.length

        })
    })


})