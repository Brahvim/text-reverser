var t,      //t is the text box,
    o,      //o is the output.
    g;      //g is the GitHub repo link.
function setup() {
    createCanvas(300, 150);
    // p = createP("Text Reverser program!");
    // p.position(150, p.position().y, static);
    t = createInput((getItem('last') != null) ? getItem('last') : ''); t.position(50);
    o = createInput((getItem('last') != null) ? getItem('last') : ''); o.position(50, t.position().y + 25);
    g = createA('https://github.com/Brahvim/text-reverser',
        'Hosted with GitHub Pages.', '_blank');
    g.position(g.position().x + 285, o.position().y + 40);


    //Text styling:
    textStyle(ITALIC);
    textFont('Cursive');
    textAlign(CENTER);
    textSize(20);
    // t.attribute('autofocus');
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
    text('And Emojis don\'t work!', 180, 140);
    textSize(20);
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