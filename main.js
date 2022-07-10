
    var sliderOne = document.getElementById("myRangeOne");
    var userInputOne = document.getElementById("demo-input-one");
    userInputOne.value = sliderOne.value;

    var sliderTriangle = document.getElementById("sliderID");
    var userInputTriangle = document.getElementById("inputID");
    userInputTriangle.value = sliderTriangle.value;

    var commandSlider = document.getElementById("commandID");
    var commandInput = document.getElementById("commandInputID");
    commandInput.value = commandSlider.value;

    userInputTriangle.oninput = function () {
        sliderTriangle.value = this.value;
        console.log("userInputTriangle: " + userInputTriangle.value);
        console.log("sliderTriangle: " + sliderTriangle.value);
    }
    userInputOne.oninput = function () {
        sliderOne.value = this.value;
        console.log("first slider: " + sliderOne.value);
    }
    commandInput.oninput = function () {
        commandSlider.value = this.value;
        console.log("command slider: " + commandSlider.value);
    }