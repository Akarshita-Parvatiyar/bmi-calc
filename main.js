function BMI(){
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    var b = w/(h/100*h/100);
    var bm = (b.toFixed(2));

    document.getElementById('bmi').innerHTML = 'Your BMI is '+bm;
}