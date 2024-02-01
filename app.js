const URL = "https://api.adviceslip.com/advice"
const adviceId = document.querySelector('.adviceId')
const adviceText = document.querySelector('.adviceText')

async function newAdvice() {
    const result = await fetch(URL)
    result.json().then(data => {
    adviceId.innerHTML = 'Advice  #' + data.slip.id
    adviceText.innerHTML = '"' + data.slip.advice + '"'
    })
}