var p,  //p is the prompt, 
    t,  //t is the text box, 
    o;  //o is the output.
function setup() {
    noCanvas();
    p = createP("Text Reverser program!");
    p.position(150);
    t = createInput(""); t.position(150, p.position().y + 50);
    o = createInput(""); o.position(150, t.position().y + 25);
}

var s,      //s is the string received from the textbox
    sArr,   // and sArr is the split string (array), which is later reversed.
    r;      //r is the resultant string.
function draw() {
    s = t.value();
    sArr = split(s, '');
    sArr.reverse();
    for (let i = 0; i < s.length; i++) {
        r += sArr[i];
    }
    o.value(r);
    r = '';
}