const phone = document.getElementById('phone');
const maskOptions = {
    mask: '+{38}(000)000-00-00'
};
IMask(phone, maskOptions);

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // return day + '.' + month + '.' + year;
    return `${day}.${month}.${year}`;
}

function startCountdown(duration, display) {
    const numberDuration = Number(duration);

    if (numberDuration) {
        let timer = numberDuration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt(timer % 3600 / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                timer = 0;
            }
        }, 1000);
    } else {
        console.error("Функція startCountdown може приймати першим аргументом тільки число")
    }
}

window.onload = function() {
    const today = new Date();
    document.getElementById('order-date').textContent = formatDate(today);

    const twoHours = 60 * 60 * 2;
    const display = document.querySelector('.time');
    startCountdown(twoHours, display);
};

