let body = document.getElementsByTagName("body")[0];
let div;
let h2;
let checkbox;
let text;
let label;
let input;

for (let i=0;i<5;i++) {
    div = document.createElement("div");
    text = document.createTextNode("Soy el div " + (i + 1));
    h2 = document.createElement("h2");
    h2.appendChild(text);
    div.appendChild(h2);
    {
        label = document.createElement("label");
        label.setAttribute("for", "input" + (i + 1));
        text = document.createTextNode("label del div" + (i + 1));
        label.appendChild(text);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
        input = document.createElement("input");
        input.setAttribute("id", "input" + (i + 1));
        input.setAttribute("type", "checkbox");
        input.setAttribute("value", "input del div " + (i + 1));
        div.appendChild(input);
    }

    body.appendChild(div);
}