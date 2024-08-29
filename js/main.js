window.onload = loaded;

let button = document.getElementById("clickme");
if (button == null) {

} else {
    button.addEventListener("click", helloHandler);
}

function helloHandler() {
    const hello = sayHello();
    console.log(hello);
    alert("You clicked me hehehe!");
}

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}
