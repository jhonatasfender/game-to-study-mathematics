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
        b.style.fontFamily = "appleberry";
        b.style.fontSize = "200px";
        b.style.color = "white";
        b.style.textAlign = "center";
        calculation();
        div.appendChild(text);
        input.style.borderStyle = "none";
        input.style.fontFamily = "appleberry";
        input.style.fontSize = "200px";
        input.style.color = "white";
        input.style.width = "411px";
        input.style.background = "transparent";
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
            var elements = document.getElementsByTagName("p");
            for (var n = 0; n < elements.length; n++) {
                var element = elements[n];
                element.parentNode.removeChild(element); // should work now
            }
            if (this.value.trim() == result) {
                var t = d.createTextNode("Acertou " + result), p = d.createElement('p');
                p.appendChild(t);
                div.appendChild(p);
                main();
            } else {
                /*console.log(this.value + " == " + result);
                 console.log("errou");*/
                var t = d.createTextNode("Errou " + result), p = d.createElement('p');
                p.appendChild(t);
                div.appendChild(p);
            }
        };
    };
    w.onload = main;
})(window);
