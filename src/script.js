function Submit(){
    let button = document.getElementById("btn");
    // button.innerText = "krkedikha"
    let ht = document.getElementById("ht");
    let wt = document.getElementById("wt");

    let bmi = document.getElementById("bmi");
    let result = wt.value/(ht.value*ht.value);

    bmi.value = result
    console.log("clicked");
    console.log(result);
    

    // BMI = weight / height²
}