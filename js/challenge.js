let counter = document.querySelector("#counter")
let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")
let submit = document.querySelector("#submit")
let list = document.querySelector("#list")
let commentBody = document.getElementById(["comment-form"])
let paused = false
let likeTracker = {}

function countup() { 
    counter.innerText = parseInt(counter.innerText) + 1
}
let timer = setInterval(countup, 1000)

minus.addEventListener("click", function(){
    counter.innerText = parseInt(counter.innerText) - 1
})
plus.addEventListener("click", function(){
    counter.innerText = parseInt(counter.innerText) + 1
})
heart.addEventListener("click", function(){
    let newLi = document.createElement("li")
    list.append(newLi)
    newLi.innerText = `${counter.innerText} has been liked 1 time.`
})

pause.addEventListener("click", function(){
    paused = !paused
    if (paused) {
        clearInterval(timer)
        pause.innerText = "Resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
    } else {
        timer = setInterval(countup, 1000)
        pause.innerText = "pause"
        minus.disabled = false
        pluse.disabled = false
        heart.disabled = false
        submit.disabled = false
    }
})

submit.addEventListener("click", function(evt){
    evt.preventDefault()
    let newLi = document.createElement("li")
    let newComment = document.querySelector("#comment-input")
    list.append(newLi)
    newLi.innerText = newComment.value
})