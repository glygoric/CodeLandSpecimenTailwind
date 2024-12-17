var radios = document.querySelectorAll('input[type="radio"][name="co-op-c"]');


radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        var otherInput = document.getElementById('other-input-text');
        if (document.getElementById('other-radio').checked) {
            otherInput.style.display = 'block';  
        } else {
            otherInput.style.display = 'none';   
        }
    });
});
