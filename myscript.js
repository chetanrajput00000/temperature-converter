const temp1 = document.getElementById("value1");
const temp2 = document.getElementById("value2");
const unit1 = document.getElementById("unit1");
const unit2 = document.getElementById("unit2");

temp1.addEventListener("keyup", Result);
temp2.addEventListener("keyup", Result);
unit1.addEventListener("change", Result);
unit2.addEventListener("change", Result);

function Result() {
    let temp = 0;
    let t1 = parseInt(temp1.value);
    //C-F

    if (unit1.value === "celsius" && unit2.value === "celsius") {
        temp2.value = temp + t1;
    }
    if (unit1.value === "celsius" && unit2.value === "farenheit") {
        temp2.value = ((temp + t1) * 9) / 5 + 32;
    }
    if (unit1.value === "celsius" && unit2.value === "kelvin") {
        temp2.value = (temp + t1) + 273.15;
    }

    //F-C
    if (unit1.value === "farenheit" && unit2.value === "celsius") {
        temp2.value = ((temp + t1 - 32) * 5) / 9;
    }
    if (unit1.value === "farenheit" && unit2.value === "farenheit") {

        temp2.value = temp + t1;
    }
    if (unit1.value === "farenheit" && unit2.value === "kelvin") {
        temp2.value = ((temp + t1 - 32) * 5) / 9 + 273.15;
    }

    //K-C
    if (unit1.value === "kelvin" && unit2.value === "celsius") {
        temp2.value = (temp + t1 - 273.15);
    }
    if (unit1.value === "kelvin" && unit2.value === "farenheit") {
        temp2.value = ((temp + t1 - 273.15) * 9) / 5 + 32;

    }
    if (unit1.value === "kelvin" && unit2.value === "kelvin") {

        temp2.value = temp + t1;
    }
}