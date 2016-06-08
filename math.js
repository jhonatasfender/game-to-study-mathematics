(function (w) {
    var main = function () {
        var d = document,
                b = d.body,
                div = d.createElement('div'),
                input = d.createElement('input'),
                signs = ['+', '-', '*', '/'],
                numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                signSelect = signs[Math.floor(Math.random() * 3)],
                v1 = numbers[Math.floor(Math.random() * 10)],
                v2 = numbers[Math.floor(Math.random() * 10)],
                calc = v1 + " " + signSelect + " " + v2 + " = ",
                text = d.createTextNode(calc),
                result,
                calculation = function () {
                    switch (signSelect) {
                        case '+':
                            result = v1 + v2;
                            break;
                        case '-':
                            result = v1 - v2;
                            break;
                        case '*':
                            result = v1 * v2;
                            break;
                        case '/':
                            result = v1 / v2;
                            break;
                    }
                };
        b.style.backgroundImage = "url(blackboard.jpg)";
        calculation();
        div.appendChild(text);
        input.style.borderStyle = "none";
        div.appendChild(input);
        b.appendChild(div);
        input.focus();
        input.onkeypress = function (e) {
            var tecla = new Number();
            if (w.event)
                tecla = e.keyCode;
            else if (e.which)
                tecla = e.which;
            else
                return true;
            if (tecla >= "97" && tecla <= "122")
                return false;
        };
        input.onkeyup = function () {
            if (this.value == result) {
                console.log(this.value + " == " + result);
                console.log("acertou");
            } else {
                console.log(this.value + " == " + result);
                console.log("errou");
            }
        };
    };
    w.onload = main;
})(window);
