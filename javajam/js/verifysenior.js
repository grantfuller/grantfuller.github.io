var age;

age = prompt("Enter your age:")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!" 
    document.getElementById('verify').style.color = 'green';
    document.getElementById('verify').style.fontSize = '24px';
} else {
    output = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;

