const container = document.querySelector("#container");
let colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

//Loop to create 16x16 grid of divs
for(let i=0; i < 16; i++){
    for(j=0; j < 16; j++){
        let div = document.createElement("div");
        div.classList.add("grid-item"); // Add a class for styling
        container.appendChild(div);
    }
}

let grid_items = document.querySelectorAll(".grid-item");

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


let count = 1
for(let i = 0; i < grid_items.length; i++){
    grid_items[i].addEventListener("mouseover", () =>{
        rand = generateRandomNumber(0,6);
        grid_items[i].style.backgroundColor = colors[rand];
        let multiplier = 0.01;
        let opacity = (multiplier * count);
        count += 1;
        grid_items[i].style.opacity = opacity;
    });
}

let button = document.querySelector("button");
let size;
button.addEventListener("click", () => {
    size = prompt("Input grid size");
    if(size > 100) size = prompt("Input grid size less than 100");
    grid_items.forEach((item) => item.remove());
    for(let i=0; i < size; i++){
        for(let j =0; j < size; j++){
            let div = document.createElement("div");
            div.classList.add("grid-item");
            div.style.flexBasis = "calc(100% / " + size + ")";
            div.style.paddingBottom = "calc(100% / " + size + ")";
            container.appendChild(div);
        }
    }

    grid_items = document.querySelectorAll(".grid-item");


    count  = 1 
    for(let i = 0; i < grid_items.length; i++){
    grid_items[i].addEventListener("mouseover", () =>{
        rand = generateRandomNumber(0,6);
        grid_items[i].style.backgroundColor = colors[rand];
        let multiplier = 0.01;
        let opacity = (multiplier * count);
        count += 1;
        grid_items[i].style.opacity = opacity;
    });
}

});

