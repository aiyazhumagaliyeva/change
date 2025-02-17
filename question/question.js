document.addEventListener("DOMContentLoaded", function () {

    function showPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "flex";
    }

    setTimeout(showPopup, 3000);

    document.getElementById("yesBtn").addEventListener("click", function() {
        window.location.href = "../yes1/index.html";
    });

    document.getElementById("noBtn").addEventListener("click", function() {
        let popup = document.getElementById("popup");
        popup.style.display = "none"; 
        setTimeout(showPopup, 3000);
    });
});
