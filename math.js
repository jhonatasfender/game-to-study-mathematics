(function (w) {
    var main = function () {
        var d = document, b = d.body, div = d.createElement('div'), signs = ['+', '-', '*', '/'], numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                signSelect = signs[Math.floor(Math.random() * 3)], v1 = numbers[Math.floor(Math.random() * 10)],
                v2 = numbers[Math.floor(Math.random() * 10)], calc = v1 + " " + signSelect + " " + v2,
                text = d.createTextNode(calc);
        div.appendChild(text);
        b.appendChild(div);
    };
    w.onload = main;
})(window);
