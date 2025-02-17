var aText = new Array(
    "So, did the roses come?"
    );
    var iSpeed = 100; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

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