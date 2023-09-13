const inputField = document.getElementById('inputField')
const countButton = document.getElementById('countButton')

inputField.addEventListener('input', function() {
    var inputValue = inputField.ariaValueMax.trim()
    if(validateInteger(inputValue)) {
        countButton.disabled = false
    } else {
        countButton.disabled = true
    }
})

function validateInteger(input) {
    const integerRegex = /^-?\d+$/
    return integerRegex.test(input)
}