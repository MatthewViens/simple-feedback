const messageModal = document.getElementById("feedback-modal")
const resultsButton = document.getElementById("show-results")
const positiveButton = document.getElementById("positive")
const neutralButton = document.getElementById("neutral")
const negativeButton = document.getElementById("negative")

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
    showMessageModal()
})

const showMessageModal = () => {
    messageModal.classList.toggle("model-visible")
    setTimeout(() => {
        messageModal.classList.toggle("model-visible")
    }, 1000)
}
    
