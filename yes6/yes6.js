document.addEventListener('DOMContentLoaded', function () {
    const lines = document.querySelectorAll('.flying-text');
    let delay = 0;

    lines.forEach(line => {
        if (line.getAttribute('data-direction') === 'left') {
            line.classList.add('fly-left');
        } else {
            line.classList.add('fly-right');
        }
        line.style.animationDelay = `${delay}s`;
        delay += 1;
    });

    const lastLine = lines[lines.length - 1];

    lastLine.addEventListener('click', function () {
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('falling');
            }, index * 1000);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    function showPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "flex";
    }

    setTimeout(showPopup, 20000);

    document.getElementById("yesBtn").addEventListener("click", function() {
        window.location.href = "../yes4/index.html";
    });

    document.getElementById("noBtn").addEventListener("click", function() {
        let popup = document.getElementById("popup");
        popup.style.display = "none"; 
        setTimeout(showPopup, 20000);
    });
});
