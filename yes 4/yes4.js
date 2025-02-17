var aText = new Array(
  "The birds, the flowers, the foliage of the trees,",
    "The stars which seem so fixed and so sublime,",
        "Vast continents and the eternal seas -",
    "All these do change with ever-changing time."
  );
var iSpeed = 100; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
   
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
var isFirstLine = true;
var firstLineLink = '';

function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }

    var words = aText[iIndex].split(' ');
    var currentText = '';

    if (isFirstLine) {
      if (iTextPos >= words[0].length) {
          firstLineLink = '<a href="../yes3/index.html" style="color: red; text-decoration: none;">' + words[0] + '</a> ';
          for (var i = 1; i < words.length; i++) {
              var word = words[i].substring(0, Math.min(iTextPos - (words.slice(0, i).join(' ').length), words[i].length));
              currentText += word + ' ';
          }
      } else {
          for (var i = 0; i < words.length; i++) {
              var word = words[i].substring(0, Math.min(iTextPos - (words.slice(0, i).join(' ').length), words[i].length));
              currentText += word + ' ';
          }
      }
  
    } else {
        for (var i = 0; i < words.length; i++) {
            var word = words[i].substring(0, Math.min(iTextPos - (words.slice(0, i).join(' ').length), words[i].length));

            if (iIndex === aText.length - 1 && i === words.length - 1) {
                currentText += '<a href="../yes5/index.html" style="color: red; text-decoration: none;">' + word + '</a> ';
            } else {
                currentText += word + ' ';
            }
        }
    }

    if (isFirstLine && iTextPos >= aText[0].length) {
        isFirstLine = false;
    }

    if (firstLineLink) {
      sContents = firstLineLink + sContents.replace(aText[iIndex], '');
  } else {
      sContents = sContents;
  }
  
  destination.innerHTML = sContents + currentText + "_";
    
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

    setTimeout(showPopup, 30000); 

    document.getElementById("yesBtn").addEventListener("click", function() {
        window.location.href = "../yes1/index.html";
    });

    document.getElementById("noBtn").addEventListener("click", function() {
        let popup = document.getElementById("popup");
        popup.style.display = "none"; 
        setTimeout(showPopup, 30000); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {

        }
    });
});
