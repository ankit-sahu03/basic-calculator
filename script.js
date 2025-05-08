// Select the input display element
let input = document.getElementById("input");

// Select all the calculator buttons
let button = document.querySelectorAll("button");

// Loop through each button and attach a click event listener
button.forEach(element => {
    element.addEventListener("click", (e) => {
        // Log the button content to the console (for debugging)
        console.log(e.target.textContent);

        // Clear the display if 'C' is clicked
        if (e.target.textContent === "C") {
            input.innerText = "";

        // Delete the last character if '<' is clicked
        } else if (e.target.textContent === "<") {
            input.innerText = input.innerText.slice(0, -1);

        // Evaluate the expression if '=' is clicked
        } else if (e.target.textContent === "=") {
            try {
                // Use eval to calculate the result
                input.innerText = eval(input.innerText);
            } catch (error) {
                // Handle any error (e.g., invalid expression)
                input.innerText = "Error";
            }

        // Append the button value to the input display
        } else {
            input.innerText += e.target.textContent;
        }

        // Scroll to the end of the input in case it overflows
        input.scrollLeft = input.scrollWidth;
    });
});


