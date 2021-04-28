//Ejecutar codigo al presionar una tecla
window.onkeydown= key;
function key () {
    var key_number= event.keyCode;

    var a=96;
    var i=0;
    var b=48;
    var e=0;
    //numbers
    while (a<=105, i<=9) {
        switch (key_number) {
            case a:
                addNumber(i)
                break;
        }
        a++;
        i++;
    }
    while (b<=57, e<=9) {
        switch (key_number) {
            case b:
                addNumber(e)
                break;
        }
        b++;
        e++;
    }
    //operation
    switch (key_number) {
        case 8:
            clearDisplay()
            newDisplay();
            break;
        case 111:
            selecOperation("/")
            break;
        case 106:
            selecOperation("*")
            break;
        case 109:
            selecOperation("-")
            break;
        case 107:
            selecOperation("+")
            break;
        case 13:
            calcular();
            newDisplay();
            break;
        default:
            break;
    }
}
