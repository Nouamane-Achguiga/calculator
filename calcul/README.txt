Calculator
This is a simple calculator that performs basic arithmetic operations. It was built using HTML, CSS, and JavaScript.

Getting Started
To use this calculator, you simply need to open the index.html file in a web browser. This will display the calculator in the browser window, and you can start using it immediately.

Features
The calculator supports the following features:

Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Decimal point (.)
Clear (C)
Delete (DE)
Equals (=)
Usage
To perform a calculation, simply click the appropriate buttons in the calculator. The result will be displayed in the calculator's output field.

To clear the current calculation, click the C button. To delete the last entered digit or operator, click the DE button.

To perform the calculation, click the = button.

Files
This code consists of a single JavaScript file named cal.js.

How it Works
The calculation variable stores the current calculation as a string. The n variable is used to keep track of whether the previous calculation resulted in an error. If n is equal to 1, it means that an error occurred in the previous calculation, so the current calculation should overwrite the previous calculation.

The calc() function is called when a user clicks a button on the calculator. It takes the value of the button as an argument and appends it to the calculation variable. If n is equal to 1, it resets the calculation variable to an empty string before appending the new value. The updated calculation value is then displayed in the text input field.

The del() function is called when the user clicks the "DE" button. It removes the last character from the input field.

The reset() function is called when the user clicks the "C" button. It resets the calculation variable to an empty string and clears the input field.

The res() function is called when the user clicks the "=" button. It first increments n to indicate that a new calculation is starting. It then uses the eval() function to evaluate the calculation string and calculate the result. If the calculation is successful, the result is displayed in the text input field and stored in the calculation variable as a string. If the calculation fails, an error message is displayed in the input field.






Styling
body
text-align: center; - Centers the contents of the body element.
justify-content: center; - Centers the contents of the body element horizontally.
align-items: center; - Centers the contents of the body element vertically.
background-color: #56cbdb; - Sets the background color of the body element to a light blue color.
div
margin-top: 120px; - Adds a margin to the top of the calculator div to push it down the page.
display: inline-block; - Displays the calculator div as an inline block element.
width: 350px; - Sets the width of the calculator div to 350 pixels.
height: 580px; - Sets the height of the calculator div to 580 pixels.
background-color: black; - Sets the background color of the calculator div to black.
border-radius: 20px; - Rounds the corners of the calculator div.
#calculator
border: black solid 4px; - Adds a black solid border to the calculator with a width of 4 pixels.
input
width: 300px; - Sets the width of the input element to 300 pixels.
height: 65px; - Sets the height of the input element to 65 pixels.
font-size: 40px; - Sets the font size of the input element to 40 pixels.
margin-bottom: 20px; - Adds a margin to the bottom of the input element.
margin-top: 20px; - Adds a margin to the top of the input element.
border-radius: 20px; - Rounds the corners of the input element.
color: white; - Sets the font color of the input element to white.
padding-left: 30px; - Adds padding to the left of the input element.
.btn
padding: 30px; - Adds padding around the buttons.
border: none; - Removes the border from the buttons.
border-radius: 10px; - Rounds the corners of the buttons.
margin: 3px; - Adds a margin between the buttons.
font-size: 22px; - Sets the font size of the buttons to 22 pixels.
background-color: #262834; ; - Sets the background color of the buttons to a dark gray color.
color: white; - Sets the font color of the buttons to white.
.equ
padding-left: 73px; - Adds extra padding to the left side of the equals button.
padding-right: 73px; - Adds extra padding to the right side of the equals button.
.del
padding-left: 65px; - Adds extra padding to the left side of the delete button.
padding-right: 65px; - Adds extra padding to the right side of the delete button.
.op
background-color: #56cbdb; - Sets the background color of the operator buttons to the same light blue color as the body element.
color: white; - Sets the font color of the operator buttons to white.
Conclusion
This CSS code provides the styling for a simple calculator. It usess