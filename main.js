function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const digits = [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];
    const digitElements = document.querySelectorAll('.digit');

    digitElements.forEach((digitElement, index) => {
        if (digitElement.textContent !== digits[index]) {
            digitElement.textContent = digits[index];
        }
    });
}

setInterval(updateClock, 1000);

updateClock();

