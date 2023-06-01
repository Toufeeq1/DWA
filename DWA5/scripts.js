// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (dividend === '' || divider === '') {
        document.querySelector("[data-result]").textContent = 'Division not performed. Both values are required in inputs. Try again .' //added this to display if no number present
        return
    };
     
    if ( dividend <0 || divider <0 ){
        const consoleError = new Error('Division not performed. Invalid number provied. Try again');
         console.error(consoleError)
         document.querySelector("[data-result]").textContent = ' Error : Division not performed. Invalid number provided. Try again.' 
         return
    };

    if ( isNaN(dividend) || isNaN(divider) ) { 
        const criticalErorr = new Error('Something critical went wrong. Please reload the page')
        document.querySelector("body").textContent = criticalErorr
        console.error(criticalErorr)
    };


      result.innerText = Math.floor(dividend / divider);  //added Math.floor to round the final value down
});