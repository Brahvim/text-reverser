var t,      //t is the text box,
    o;      //o is the output.
function setup() {

    noCanvas();
    t = createInput((getItem('last') != null) ? getItem('last') : ''); t.position(180);
    o = createInput((getItem('last') != null) ? getItem('last') : '').id('o'); o.position(t.position().x, t.position().y + 25);
    t.style('border: 2px solid; border-radius: 5px;');
    o.style(t.attribute('style'));

}

var s,          //s is the string received from the textbox
    sArr,       // and sArr is the split string (array), which is later reversed.
    r = '';     //r is the resultant string.
var fG = 250,   //Fill Green Value
    fB = 250,   //Fill Blue Value
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
    s = t.value();
    sArr = split(s, '');
    sArr.reverse();
    for (let i = 0; i < s.length; i++) {
        r += sArr[i];
    }
    o.value(r);
    r = ''; //Just so it renders correctly 😁
    storeItem('last', s);
}