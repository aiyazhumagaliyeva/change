document.addEventListener('DOMContentLoaded', function () {
    const lastWordLink = document.getElementById('lastWordLink');
    const stanza = document.getElementById('falling');

    lastWordLink.addEventListener('click', function (e) {
        e.preventDefault(); 

        const words = stanza.querySelectorAll('span, .animate-word'); 
        
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('falling');
            }, index * 100); 
        });

        const lastWordSpan = stanza.querySelector('.animate-word:last-child'); 
        
        if (lastWordSpan) {
            lastWordSpan.addEventListener('animationend', function () {
                setTimeout(() => {
                    window.location.href = "../yes4/index.html"; 
                }, 500); 
            });
        } else {
 
            setTimeout(() => {
                window.location.href = "../yes 4/index.html"; 
            }, 9000); // Adjust the delay as needed
        }
    });

    function showPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "flex";
    }

    setTimeout(showPopup, 20000);

    document.getElementById("yesBtn").addEventListener("click", function() {
        window.location.href = "../yes1/index.html";
    });

    document.getElementById("noBtn").addEventListener("click", function() {
        let popup = document.getElementById("popup");
        popup.style.display = "none"; 
        setTimeout(showPopup, 20000);
    });
});
