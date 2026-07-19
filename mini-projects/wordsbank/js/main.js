const wordInput = document.querySelector("#word")
const translationInput = document.querySelector("#translation")
const langInput = document.querySelector("#lang")
const saveBtn = document.querySelector("button")
const wordsContainer = document.querySelector("#words")

saveBtn.addEventListener("click", (e) => {
    e.preventDefault()

    wordsContainer.innerHTML += `
        <div class="word ${langInput.value}">
            <h2>${wordInput.value}</h2>
            <p>${translationInput.value}</p>
        </div>
    `
})