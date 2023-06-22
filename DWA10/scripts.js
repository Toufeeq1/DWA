const MAX_NUMBER = 10
const MIN_NUMBER = -5
const STEP_AMOUNT = 1 
const RESET_AMOUNT = 0

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')


console.log(number, subtract, add)

const subtractHandler = () => {
    
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    if (add.disabled === true){
        add.disabled = false
    }
    
    if (newValue<=MIN_NUMBER){
        subtract.disabled =true
    }
}


const addHandler = () => {
 
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.disabled === true){
        subtract.disabled = false
    }

    if (newValue>=MAX_NUMBER){
        add.disabled = true
    }
}

const resetHandler = () => {
    const resetValue = parseInt(number.value)
    if (resetValue !== 0){
        number.value = RESET_AMOUNT;
         alert("You have reset your tally amount to 0 !")
    }
}


subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)

reset.addEventListener('click' , resetHandler)