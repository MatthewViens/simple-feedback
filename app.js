const messageModal = document.getElementById("feedback-modal")
const resultsModal = document.getElementById("results-modal")
const resultsButton = document.getElementById("show-results")
const positiveButton = document.getElementById("positive")
const neutralButton = document.getElementById("neutral")
const negativeButton = document.getElementById("negative")
const pinInput = document.getElementById("pin")

let positiveRating = neutralRating = negativeRating = 0

console.log(positiveRating, neutralRating, negativeRating)

positiveButton.addEventListener('click', function() {
    positiveRating++
    showMessageModal()
    console.log(positiveRating)
}) 

neutralButton.addEventListener('click', function() {
    neutralRating++
    showMessageModal()
    console.log(neutralRating)
}) 

negativeButton.addEventListener('click', function() {
    negativeRating++
    showMessageModal()
    console.log(negativeRating)
}) 

resultsButton.addEventListener('click', function() {
    showResultsModal()
})

pinInput.addEventListener('keyup', function(e) {
    checkPin(e)
})

const showMessageModal = () => {
    messageModal.classList.toggle("model-visible")
    setTimeout(() => {
        messageModal.classList.toggle("model-visible")
    }, 1000)
}

const showResultsModal = () => {
    resultsModal.classList.toggle("model-visible")
    pinInput.focus()
}

const checkPin = (e) => {
    console.log(e.target.value)
    if (e.target.value.length === 4) {
        if (parseInt(e.target.value) === 9959) {
            console.log("pass")
            const content = e.target.parentElement
            content.innerHTML = `
            <p>Positive: ${positiveRating}</p>
            <p>Neutral: ${neutralRating}</p>
            <p>Negative: ${negativeRating}</p>`
        } else {
            e.target.value = ''
            resultsModal.classList.toggle("model-visible")
        }
    }

}
    
