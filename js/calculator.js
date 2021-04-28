    var display = document.getElementById("display")
    const calculator = document.getElementById("calculator");
    const number = document.getElementsByName("input-number");
    const operation = document.getElementsByName("operation");
    const equal = document.getElementsByName("equal")[0];
    const borrar = document.getElementsByName("delete")[0];
    var num1 = "";
    var num2 = "";
    var operation1 = "";
    var result = undefined;

    number.forEach(function (btn) {
      btn.addEventListener("click", () => {
        addNumber(btn.innerText);
      })
    })
    operation.forEach((btn) => {
      btn.addEventListener("click", () => {
        selecOperation(btn.innerText)
      })
    })
    borrar.addEventListener("click", () => {
      clearDisplay();
      newDisplay();
    })


    function addNumber(num) {
        num1 = num1.toString() + num.toString();
        newDisplay();
    }
    function selecOperation(op) {
      if (op === "") return;
      if (op !== "") {
        result = op.toString();
        num2 = num1;
        num1 = "";
      }
    }
    function calcular() {
      var calculo;
      const anterior = parseFloat(num1);
      const actual = parseFloat(num2);
      switch (result) {
        case "+":
          calculo = actual + anterior
          break;
        case "-":
          calculo = actual - anterior
          break;
        case "*":
          calculo = actual * anterior
          break;
        case "/":
          calculo = actual / anterior
          break;
      }
      num1 = calculo;
      result = undefined;
      num2 = "";

    }
    function clearDisplay() {
      num1 = "";
      num2 = "";
      result = undefined;
    }
    equal.addEventListener("click", () => {
      calcular();
      newDisplay();
    })
    function newDisplay() {
      display.value = num1;
    }