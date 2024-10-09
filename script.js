const container = document.querySelector("#container");


//Loop to create 16x16 grid of divs
for(let i=0; i < 16; i++){
    for(j=0; j < 16; j++){
        let div = document.createElement("div");
        div.classList.add("grid-item"); // Add a class for styling
        container.appendChild(div);
    }
}

let grid_items = document.querySelectorAll(".grid-item");



for(let i = 0; i < grid_items.length; i++){
    grid_items[i].addEventListener("mouseover", () =>{
        grid_items[i].style.backgroundColor = "#0092ca";
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



    for(let i = 0; i < grid_items.length; i++){
    grid_items[i].addEventListener("mouseover", () =>{
        grid_items[i].style.backgroundColor = "#0092ca";
    });
}

});

