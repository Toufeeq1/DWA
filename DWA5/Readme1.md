## information

This code does :

It selects the form element and the result element from the HTML using the [data-form] and [data-result] attributes, respectively.

An event listener is added to the form element, listening for the "submit" event.

Inside the event listener callback function, the default behavior of the form submission is prevented using event.preventDefault().

The values of dividend and divider are extracted from the form using FormData and Object.fromEntries.

The code checks if either dividend or divider is empty, and if so, it displays an error message in the data-result element and stops the execution of the function.

It checks if either dividend or divider is negative, and if so, it displays an error message in the data-result element and stops the execution of the function.

It checks if either dividend or divider is not a number (NaN), and if so, it displays an error message on the whole page and stops the execution of the function.

Finally, if none of the error conditions are met, it performs the division operation by dividing dividend by divider and displays the result in the data-result element. The Math.floor function is used to round the result down to the nearest whole number.

