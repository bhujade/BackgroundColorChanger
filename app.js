const btn = document.getElementById("btn");


let arr = ["red", "auqa", "blue", "green"];

    
    let changeColor = () => {
    
        
        let randomNumcolors = Math.floor(Math.random()* 4)
        document.body.style.backgroundColor = arr[randomNumcolors];
        console.log("clicked")
    };

btn.addEventListener('click', changeColor)

