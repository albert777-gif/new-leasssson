
const isConfirmed = confirm("Amalni tasdiqlaysizmi?");


const num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
const num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

// Amalni bajarish va natijani chiqarish
if (isConfirmed) {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
} else {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
}
