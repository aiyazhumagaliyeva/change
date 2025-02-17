document.addEventListener('DOMContentLoaded', function () {
    const lastWord = document.getElementById('lastWordLink');
    const stanza = document.getElementById('falling');

    lastWord.addEventListener('click', function (e) {
        e.preventDefault(); 

        const words = stanza.querySelectorAll('span');
        
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('falling');
            }, index * 100); 
        });

        const lastWordSpan = document.getElementById('lastWord');
        lastWordSpan.addEventListener('animationend', () => {
            setTimeout(() => {
                window.location.href = "../yes6/index.html";
            }, 500); 
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
