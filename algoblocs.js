
/* 
// A1
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceDown();

//Réalisation
forward(200);
faceRight();
forward(100);
 */

/* 
// A2
// Initialisation
setPos(250,250);
changeColor(color.yellow);
setLineWidth(10);
faceLeft();

//Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
 */

/* 
//A3
//Initialisation
setPos(250,250);
changeColor(color.red);
setLineWidth(10);
faceLeft();

//Réalisation
forward(100);
backward(200);
forward(100);
faceUp();
forward(100);
backward(200);
 */

/* 
//A3
//Initialisation
setPos(200,400);
changeColor(color.green);
setLineWidth(10);
faceRight();

//Réalisation
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);
 */

/* 
//A4
//Initialisation
setPos(300,200);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

//Réalisation
arcRight(50,180);
arcLeft(50,180);
arcLeft(100,360);
 */

/* 
//A5
//Initialisation
setPos(300,300);
changeColor(color.aqua);
setLineWidth(10);
faceUp();

//Réalisation
forward(50);
up();
forward(50);
down();
forward(100);
 */

/* 
//A6
//Initialisation
setPos(250,300);
changeColor(color.green);
setLineWidth(10);
faceDown();

//Réalisation
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);
 */

/* 
//A7
//Initialisation
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();

//Réalisation
forward(50);
right(90);
forward(100);
right(90);
forward(200);
right(90);
forward(50);
up();
forward(50);
right(90);
forward(50);
down();
forward(50);
*/

/* 
//A8
//Initialisation
setPos(200,400);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

//Réalisation
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180);
 */

/* 
//B1
//Initialisation
setPos(100,100);
changeColor(color.green);
faceRight();
setLineWidth(10);

//Réalisation
for(let i=0; i<4; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}
 */

/* 
//B2
//Initialisation
setPos(60,300);
changeColor(color.red);
setLineWidth(10);
faceUp();

//Réalisation
for(let i=0; i<4; i++){
    forward(60);
    right(90);
    forward(60);
    right(90);
    forward(60);
    left(90);
    forward(60);
    faceUp();
}
 */

/* 
//B3
//Initialisation
setPos(250,250);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

//Réalisation
for(let i=0; i<4; i++){
    forward(100);
    right(90);
};
 */

/* 
//B4
//Initialisation
setPos(250,350);
setLineWidth(10);
changeColor(color.aqua);
faceRight();

//Réalisation
for(let i=0; i<3; i++){
    forward(100);
    left(180-60);
}
 */

/* 
//B5
//Initialisation
setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
faceUp();

//Réalisation
forward(100);
changeColor(color.red);
for(let i=0; i<3; i++){
    forward(50);
    right(180-60);
}
 */

/* 
//B6
//Initialisation
setPos(150,300);
setLineWidth(10);
changeColor(color.red);
faceRight();

//Réalisation
for(let i=0; i<2; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i=0; i<3; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}
 */

/* 
//B7
//Initialisation
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

//Réalisation
for(let i=0; i<4; i++){
    forward(100);
    right(90);
}
left(60);
for(let i=0; i<2; i++){
    forward(100);
    right(180-60);
}
 */

/* 
//B8
//Initialisation
setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i=0; i<16; i++){
    forward(200);
    right(180-45);
}
 */


/* 
//B9
//Initialisation
setPos(150,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

//Réalisation
forward(50);
up();
forward(50);
down();
for(let i=0; i<3; i++){
    forward(100);
    right(180-60);
}
 */

/* 
//B10
//Initialisation
setPos(20,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

//Réalisation
for(let i=0; i<8; i++){
    forward(100);
    right(180-45);
}
up();
forward(200);
left(90);
forward(100);
right(90);
changeColor(color.yellow);
down();
for(let i=0; i<8; i++){
    forward(200);
    right(180-45);
}
right(90);
up();
forward(200);
changeColor(color.fuchsia);
down();
for(let i=0; i<8; i++){
    forward(100);
    right(180-45);
}
 */

/* 
//B11
//Initialisation
setPos(200,200);
setLineWidth(10);
changeColor(color.red);
faceRight();

//Réalisation
for(let i=0; i<4; i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
 */

/* 
//B12
//Initialisation
setPos(300,250);
setLineWidth(10);
changeColor(color.blue);
faceRight();

//Réalisation

for(let i=0; i<3; i++){
    right(90);
    forward(50);
}
up();
forward(50);
changeColor(color.green);
down();
for(let i=0; i<3; i++){
    forward(50);
    right(90);
} */

/* 
//C2
//Initialisation
setPos(250,590);
setLineWidth(10);
changeColor(color.fuchsia);
faceUp();

//Réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}
 */

/* 
//C3
//Initialisation
setPos(20,350);
setLineWidth(10);
shiftColor(0.4);
faceRight();

//Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<8; j++){
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}
 */

/* 
//C4
//Initialisation
setPos(10, 300);
setLineWidth(10);
changeColor(color.red);
faceRight();

//Réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(50);
        left(180-60);
    }
    changeColor(color.yellow);
    for(let j=0; j<4; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
    changeColor(color.red);
}
 */

/* 
//C5
//Initialisation
setPos(300,300);
setLineWidth(10);
shiftColor(0.2);
faceRight();

//Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<8; j++){
        forward(200);
        left(180-45);
    }
    right(90);
    shiftColor(0.2);
}
 */

/* 
//C6
//Initialisation
setPos(300,400);
setLineWidth(10);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<5; j++){
        forward(100);
        left(180-60);
    }
    right(180-60);
}
 */

/* 
//C7
//Initialisation
setPos(300,350);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

//Réalisation
for(let i=0; i<8; i++){
    for(let j=0; j<4; j++){
        forward(50);
        right(180-60);
    }
    left(165);
}
 */

/* 
//C8
//Initialisation
setPos(300,595);
changeColor(color.green);
setLineWidth(10);
faceUp();

//Réalisation
forward(200);
left(180-135);
for(let i=0; i<4; i++){
    changeColor(color.red);
    for(let j=0;j<3;j++){
        forward(100);
        left(180-60);
    }
    changeColor(color.yellow);
    forward(100);
    right(90) 
}
 */

/* 
//C9
//Initialisation
setPos(450,400);
setLineWidth(10);
changeColor(color.green);
faceRight();

//Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        for(let k=0; k<4; k++){
            right(90);
            forward(50);
        }
        forward(50);
        right(180-60);
    }
    left(180-60);
    forward(200);
} 
*/

/* 
//C10
//Initialisation
setPos(300,150);
setLineWidth(10);
changeColor(color.red);
faceDown();

//Réalisation
for(let i=0; i<4; i++){
    for(let j=0;j<4;j++){
        forward(50);
        for(let k=0; k<4; k++){
            left(90);
            forward(25);
        }
        right(90);
    }
    forward(100);
}
*/

/* 
//C11
//Initialisation
setPos(200,200);
setLineWidth(10);
shiftColor(0.7);
faceRight();

//Réalisation
for(let i=0; i<6; i++){
    for(let j=0; j<6; j++){
        for(let k=0; k<4; k++){
            forward(50);
            left(180-60);
        }
        right(180-120);
    }
    up();
    forward(100);
    shiftColor(0.1);
    right(180-120);
    down();
}
 */

/* //C12
//Initialisation
setPos(300,250);
setLineWidth(10);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<2; j++){
        arcLeft(50,90);
        forward(50);
        left(90);
    }
    arcRight(50,45);
}
changeColor(color.blue);
left(180-120);
arcRight(100,300);
right(300-180);
arcLeft(50,180);
 */


/* 
//D10
//Initialisation
setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
faceRight();

//Réalisation
let length=50;
for(let i=0; i<10; i++){
    forward(length);
    right(90);
    length+=50;
}
 */

/* 
//D11
//Initialisation
setPos(50,300);
changeColor(color.write);
setLineWidth(10);
faceRight();

//Réalisation
let length=125;
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(length);
        left(180-60);
    }
    forward(length);
    length-=25;
}
 */

/* //D12
//Initialisation
setPos(300,400);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

//Réalisation
let length=50;
for(let i=0; i<6; i++){
    for(let j=0; j<4; j++){
        forward(length);
        left(180-60);
    }
    right(180-120);
    length+=25;
}
 */

/* 
//D13
//Initialisation
setPos(350,250);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

//Réalisation
let ray=50;
for(let i=0; i<8; i++){
    down();
    arcRight(ray,180);
    up();
    forward(50);
    ray+=25;
}
 */


/* 
//D14
//Initialisation
setPos(100,300);
setLineWidth(10);
changeColor(color.green);
faceRight();
left(45);

//Réalisation
for(let i=0; i<2; i++){
    let length=25;
    for(let j=0; j<4; j++){
        forward(length);
        right(90);
        forward(length);
        left(90);
        length+=25;
    }
    right(180);
}
 */



/* 
//D15
//Initialisation
setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceDown();

//Réalisation
let length=50;
let angle=90;

for(let i=0; i<10; i++){
    forward(length);
    left(180-angle);
    angle+=5;
    length+=10;
}
 */



//D16
//Initialisation
setPos(300,250);
setLineWidth(10);
changeColor(color.green);
faceDown();

//Réalisation
radius=100;
forward(100);
right(180-60);
forward(50);
faceLeft();
for(let i=0; i<2; i++){
    forward(50);
    right(90);
}
forward(50);
faceDown();
left(180-60);
forward(50);
faceRight();
up();
forward(50);
changeColor(color.red);
for(let i=0; i<3; i++){
    down();
    arcRight(radius,180);
    up();
    arcRight(radius,180);
    radius+=25;
}



