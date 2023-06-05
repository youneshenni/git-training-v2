const boutton = document.getElementById("but");
boutton.addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const select = document.getElementById("eu").value
    console.log(input1, input2, select)
    const texta = document.getElementById("texta")
    switch (select) {
        case "addition": texta.value = add(input1, input2);
            break;
        case "multiplication": texta.value = multipe(input1, input2);
            break;
        case "soustraction": texta.value = soustraction(input1, input2);
            break;
        case "division": texta.value = division(input1, input2);
            break;


    }



})
