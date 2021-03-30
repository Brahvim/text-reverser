var p,    //p is the prompt, 
    t,      //t is the text box, 
    o;      //o is the output.
function setup() {
    createCanvas(500, 150);
    // p = createP("Text Reverser program!");
    // p.position(150, p.position().y, static);
    t = createInput(""); t.position(50);
    o = createInput(""); o.position(50, t.position().y + 25);
    o.attribute('autofocus', 'true');
    //Text styling:
    textStyle(ITALIC);
    textFont('Cursive');
    textAlign(CENTER);
    textSize(20);
}

var s,      //s is the string received from the textbox
    sArr,   // and sArr is the split string (array), which is later reversed.
    r = '';      //r is the resultant string.
var fG = 250,  //Fill Green Value
    fB = 250,  //Fill Blue Value
    gstate = false, bstate = false;
function draw() {
    background(13, 122, 110);
    fill(fG - 150, fG, fB,);
    if (fG <= 245) { gstate = true; }
    if (fG >= 255) { gstate = false; }
    if (fB <= 250) { bstate = true; }
    if (fB >= 255) { bstate = false; }
    fB += (bstate) ? 0.1 : -0.1;
    fG += (gstate) ? 0.1 : -0.1;
    text('Enter Text to reverse it.', 150, 100);
    fill(255, 217, 218);
    textSize(6);
    text('..that\'s all this stupid website does.', 180, 120);
    textSize(20);
    s = t.value();
    sArr = split(s, '');
    sArr.reverse();
    for (let i = 0; i < s.length; i++) {
        r += sArr[i];
    }
    o.value(r);
    r = '';
}