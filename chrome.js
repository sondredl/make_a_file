        var slider = document.getElementById("sliderID");
        var userInput = document.getElementById("inputID");
        userInput.innerHTML = slider.value;

        userInput.oninput = function () {
            slider.innerHTML = this.value;
        }