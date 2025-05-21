    // Vis popup etter 3 sekunder
    window.onload = function () {
      setTimeout(function () {
        document.getElementById('popupOverlay').style.display = 'block';
      }, 3000);
    }

    function closePopup() {
      document.getElementById('popupOverlay').style.display = 'none';
    }