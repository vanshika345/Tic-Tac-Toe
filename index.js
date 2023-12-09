let boxElement=document.querySelectorAll('.box')

let xAttempts=[]
let oAttempts=[]
let wonTheGame=0

let gameResult=document.getElementById('result')
let message=document.getElementById('message')

let winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8,],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxElement.forEach( (box)=> {
    box.onclick = handleClick
} )

var click = 0

function handleClick(event){
    let i=event.target.getAttribute("Id")
    let p=document.createElement('p')
    p.setAttribute('id','text')
    boxElement[i-1].append(p)

    if(click%2==0){
        p.innerText='x'
        xAttempts.push(i-1)
        console.log(xAttempts)
        result(winningCombinations,xAttempts,'x')
        
    }else{
        p.innerText = 'o'
        oAttempts.push(i-1)
        console.log(oAttempts)
        result(winningCombinations,oAttempts,'o')
    }
    click++
    if(click===9 && wonTheGame==0){
        gameResult.style.visibility="visible"
        message.innerHTML="It's a tie"
    }
}

function result(winningCombinations,attempts,playerName){

    let checker=[]
    let flag=0

    for(let i=0;i<winningCombinations.length;i++){
        if(Array.isArray(winningCombinations[i])){
            result(winningCombinations[i],attempts,playerName)
        }else{
            if(attempts.includes(winningCombinations[i])){
                checker.push(true)
                flag++
            }else{
                checker.push(false)
            }
        }
    }
    if (checker.every(check => check === true)&&flag>2){
        gameResult.style.visibility="visible"
        message.innerHTML ="'"+ playerName +"'"+"Won the game!"
        wonTheGame=1
        
    }
}

let btn = document.querySelector("#button")
btn.addEventListener("click", ()=>{
    location.href  ="./index.html"
})