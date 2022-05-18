let arraySize = document.querySelector("#arr_sz");

arraySize.addEventListener("input",()=>{
    createNewArray(parseInt(arraySize.value))
})

let array = []
createNewArray()
function createNewArray(noOfBars = 50){
    deleteOldArray()
    array=[]
    for(let i=0;i<noOfBars;i++){
        array.push(Math.floor(Math.random()*250)+1)
    }

    const bars = document.querySelector("#bars");

    for(let i=0;i<noOfBars;i++){
        const bar = document.createElement("div")
        bar.style.height = `${array[i]*2}px`
        bar.classList.add("bar");
        bar.classList.add("flex-item");
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }
}

function deleteOldArray(){
    const bars = document.querySelector("#bars")
    bars.innerHTML = ""
}
const newArray = document.querySelector(".newArray")
newArray.addEventListener("click",function(){
    createNewArray(arraySize.value)
})