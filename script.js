const projectItems = document.querySelectorAll(".items");

const projectContainer = document.querySelector(".projectItemContainer")

const cursor = document.querySelector(".cursor")


const projectInfo = [
    { name: "Calculator", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_H3wHlZSZ6Ci9qEwg8wWOzNqa3DYTI8ZmCQAHchgDQ&s=10", projectPath: "assets/projects/calculator/calculator.html" },
    { name: "Currency Converter", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYHK0gDUbEN_BxeHCH_b_eRR4oL3Kl6CZrf0PCZEnTA&s=10", projectPath: "assets/projects/currency converter/index.html" },
    { name: "Music App", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn70RuCTzjj4xESROoaBE-WXr_czD2U_O48aSp3xFNhQ&s=10", projectPath: "assets/projects/spotify/index.html" },
    { name: "Task Manager", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGszV1DfODlJrKZWwoyEW3LmAc1TxTOrozxvIuuJuYg&s=10", projectPath: "assets/projects/task Manager/index.html" },
    { name: "Tik-TakToe Game", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugAFqG47Rk-ODLaflQENfmfVjajA-1HnBECqQbnFjRQ&s=10", projectPath: "assets/projects/tik tak toe game/index.html" },
    { name: "Weather App", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sNTCR-6IqtqxiLUiZ-k73foSEDBY4-Phko62-mHZzA&s=10", projectPath: "assets/projects/weather App/index.html" },
    { name: "Shopping List Manager", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8T0JbPBv15KnucJsJWT40x3a3qqlcUYvE3M4NqBuPQQ&s", projectPath: "assets/projects/shoping list manager/index.html" },

]

projectInfo.forEach((project) => {
    projectContainer.innerHTML += ` <div class="items">
                    
                    <h2>${project.name}</h2>

                    <div class="imgContainer">

                        <img src="${project.imgPath}" alt="${project.name}">
                    </div>

                    <a  href="${project.projectPath}" class="view"> View Project</a>

                </div> `
})

// about section

const aboutItems = document.querySelectorAll(".aboutItem");

aboutItems.forEach(function (item) {

    const questionBox = item.querySelector(".questionBox");
    const icon = item.querySelector(".plusIcon i");

    questionBox.addEventListener("click", function () {

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        } else {

            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        }

    });

});


document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

})
document.addEventListener("mouseleave", () => {
    cursor.style.left = "-50%";
    cursor.style.top = "-50%";


})
