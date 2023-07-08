const worker = new Worker('worker.js')
const sumbottom = document.getElementById("sum")
const fundobottom = document.getElementById("fundo")


sumbottom.addEventListener("click", ()=>{
    worker.postMessage("Ola Mundo")
})

worker.onmessage = function(message)
{
    console.log(message)
}

fundobottom.addEventListener("click", () =>{
    if(document.body.style.backgroundColor === "green"){
        document.body.style.backgroundColor = "blue"
    }else{
        document.body.style.backgroundColor = "green"
    }
})