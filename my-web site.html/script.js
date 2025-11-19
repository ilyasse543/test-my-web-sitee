function sayHello() {
    const name = document.getElementById("nameInput").value;
    const welcome = document.getElementById("welcome");
    welcome.textContent = `أهلاً بك يا ${name}!`;
}
