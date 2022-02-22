var gameBoard = 0;

function setup() {
    createCanvas(1300, 1200);
    background(120, 120, 255);
    fill(150, 150, 150);
    rect(10, 10, 1180, 580);
}

function gameStart() {
    var set = document.getElementById("Sets").value;
    
    if(set === "Set1") {
        gameBoard = 1;
        clear();
        fill(150, 150, 150);
        rect(10, 10, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 20 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 20, lineX, 580);
        }
        
        text("Sentance Start  ↓", 30, 30, 129, 80)
        text("Kuchen", 159, 30, 129, 80)
        text("Schnitzel", 288, 30, 129, 80)
        text("einen Apfel", 417, 30, 129, 80)
        text("Wasser", 546, 30, 129, 80)
        text("Salat", 675, 30, 129, 80)
        text("Pommes", 804, 30, 129, 80)
        text("eine Kartoffel", 933, 30, 129, 80)
        text("Milch mit Gas", 1062, 30, 129, 80)
        text("Ich muss", 30, 110, 129, 80)
        text("Ich will", 30, 190, 129, 80)
        text("Ich soll", 30, 270, 129, 80)
        text("Ich darf", 30, 350, 129, 80)
        text("Ich kann", 30, 430, 129, 80)
        text("Ich möchte", 30, 510, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 180 - 42, 50, 50);
            ellipse(408 - 66, 180 - 42, 50, 50);
            ellipse(537 - 66, 180 - 42, 50, 50);
            ellipse(666 - 66, 180 - 42, 50, 50);
            ellipse(795 - 66, 180 - 42, 50, 50);
            ellipse(924 - 66, 180 - 42, 50, 50);
            ellipse(1053 - 66, 180 - 42, 50, 50);
            ellipse(1182 - 66, 180 - 42, 50, 50);
                ellipse(277 - 66, 260 - 42, 50, 50);
                ellipse(408 - 66, 260 - 42, 50, 50);
                ellipse(537 - 66, 260 - 42, 50, 50);
                ellipse(666 - 66, 260 - 42, 50, 50);
                ellipse(795 - 66, 260 - 42, 50, 50);
                ellipse(924 - 66, 260 - 42, 50, 50);
                ellipse(1053 - 66, 260 - 42, 50, 50);
                ellipse(1182 - 66, 260 - 42, 50, 50);
                    ellipse(277 - 66, 340 - 42, 50, 50);
                    ellipse(408 - 66, 340 - 42, 50, 50);
                    ellipse(537 - 66, 340 - 42, 50, 50);
                    ellipse(666 - 66, 340 - 42, 50, 50);
                    ellipse(795 - 66, 340 - 42, 50, 50);
                    ellipse(924 - 66, 340 - 42, 50, 50);
                    ellipse(1053 - 66, 340 - 42, 50, 50);
                    ellipse(1182 - 66, 340 - 42, 50, 50);
                        ellipse(277 - 66, 420 - 42, 50, 50);
                        ellipse(408 - 66, 420 - 42, 50, 50);
                        ellipse(537 - 66, 420 - 42, 50, 50);
                        ellipse(666 - 66, 420 - 42, 50, 50);
                        ellipse(795 - 66, 420 - 42, 50, 50);
                        ellipse(924 - 66, 420 - 42, 50, 50);
                        ellipse(1053 - 66, 420 - 42, 50, 50);
                        ellipse(1182 - 66, 420 - 42, 50, 50);
                            ellipse(277 - 66, 500 - 42, 50, 50);
                            ellipse(408 - 66, 500 - 42, 50, 50);
                            ellipse(537 - 66, 500 - 42, 50, 50);
                            ellipse(666 - 66, 500 - 42, 50, 50);
                            ellipse(795 - 66, 500 - 42, 50, 50);
                            ellipse(924 - 66, 500 - 42, 50, 50);
                            ellipse(1053 - 66, 500 - 42, 50, 50);
                            ellipse(1182 - 66, 500 - 42, 50, 50);
                                ellipse(277 - 66, 580 - 42, 50, 50);
                                ellipse(408 - 66, 580 - 42, 50, 50);
                                ellipse(537 - 66, 580 - 42, 50, 50);
                                ellipse(666 - 66, 580 - 42, 50, 50);
                                ellipse(795 - 66, 580 - 42, 50, 50);
                                ellipse(924 - 66, 580 - 42, 50, 50);
                                ellipse(1053 - 66, 580 - 42, 50, 50);
                                ellipse(1182 - 66, 580 - 42, 50, 50);
        fill(150, 150, 150);
        rect(10, 600, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 610 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 610, lineX, 1170);
        }
        
        text("Sentance Start  ↓", 30, 620, 129, 80)
        text("Kuchen", 159, 620, 129, 80)
        text("Schnitzel", 288, 620, 129, 80)
        text("einen Apfel", 417, 620, 129, 80)
        text("Wasser", 546, 620, 129, 80)
        text("Salat", 675, 620, 129, 80)
        text("Pommes", 804, 620, 129, 80)
        text("eine Kartoffel", 933, 620, 129, 80)
        text("Milch mit Gas", 1062,620, 129, 80)
        text("Ich muss", 30, 110 + 590, 129, 80)
        text("Ich will", 30, 190 + 590, 129, 80)
        text("Ich soll", 30, 270 + 590, 129, 80)
        text("Ich darf", 30, 350 + 590, 129, 80)
        text("Ich kann", 30, 430 + 590, 129, 80)
        text("Ich möchte", 30, 510 + 590, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 770 - 42, 50, 50);
            ellipse(408 - 66, 770 - 42, 50, 50);
            ellipse(537 - 66, 770 - 42, 50, 50);
            ellipse(666 - 66, 770 - 42, 50, 50);
            ellipse(795 - 66, 770 - 42, 50, 50);
            ellipse(924 - 66, 770 - 42, 50, 50);
            ellipse(1053 - 66, 770 - 42, 50, 50);
            ellipse(1182 - 66, 770 - 42, 50, 50);
                ellipse(277 - 66, 850 - 42, 50, 50);
                ellipse(408 - 66, 850 - 42, 50, 50);
                ellipse(537 - 66, 850 - 42, 50, 50);
                ellipse(666 - 66, 850 - 42, 50, 50);
                ellipse(795 - 66, 850 - 42, 50, 50);
                ellipse(924 - 66, 850 - 42, 50, 50);
                ellipse(1053 - 66, 850 - 42, 50, 50);
                ellipse(1182 - 66, 850 - 42, 50, 50);
                    ellipse(277 - 66, 930 - 42, 50, 50);
                    ellipse(408 - 66, 930 - 42, 50, 50);
                    ellipse(537 - 66, 930 - 42, 50, 50);
                    ellipse(666 - 66, 930 - 42, 50, 50);
                    ellipse(795 - 66, 930 - 42, 50, 50);
                    ellipse(924 - 66, 930 - 42, 50, 50);
                    ellipse(1053 - 66, 930 - 42, 50, 50);
                    ellipse(1182 - 66, 930 - 42, 50, 50);
                        ellipse(277 - 66, 1010 - 42, 50, 50);
                        ellipse(408 - 66, 1010 - 42, 50, 50);
                        ellipse(537 - 66, 1010 - 42, 50, 50);
                        ellipse(666 - 66, 1010 - 42, 50, 50);
                        ellipse(795 - 66, 1010 - 42, 50, 50);
                        ellipse(924 - 66, 1010 - 42, 50, 50);
                        ellipse(1053 - 66, 1010 - 42, 50, 50);
                        ellipse(1182 - 66, 1010 - 42, 50, 50);
                            ellipse(277 - 66, 1090 - 42, 50, 50);
                            ellipse(408 - 66, 1090 - 42, 50, 50);
                            ellipse(537 - 66, 1090 - 42, 50, 50);
                            ellipse(666 - 66, 1090 - 42, 50, 50);
                            ellipse(795 - 66, 1090 - 42, 50, 50);
                            ellipse(924 - 66, 1090 - 42, 50, 50);
                            ellipse(1053 - 66, 1090 - 42, 50, 50);
                            ellipse(1182 - 66, 1090 - 42, 50, 50);
                                ellipse(277 - 66, 1170 - 42, 50, 50);
                                ellipse(408 - 66, 1170 - 42, 50, 50);
                                ellipse(537 - 66, 1170 - 42, 50, 50);
                                ellipse(666 - 66, 1170 - 42, 50, 50);
                                ellipse(795 - 66, 1170 - 42, 50, 50);
                                ellipse(924 - 66, 1170 - 42, 50, 50);
                                ellipse(1053 - 66, 1170 - 42, 50, 50);
                                ellipse(1182 - 66, 1170 - 42, 50, 50);
    } else if (set === "Set2") {
        gameBoard = 2;
        clear();
        fill(150, 150, 150);
        rect(10, 10, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 20 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 20, lineX, 580);
        }
        
        text("hecornercornerbaka", 30, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062, 30, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 180 - 42, 50, 50);
            ellipse(408 - 66, 180 - 42, 50, 50);
            ellipse(537 - 66, 180 - 42, 50, 50);
            ellipse(666 - 66, 180 - 42, 50, 50);
            ellipse(795 - 66, 180 - 42, 50, 50);
            ellipse(924 - 66, 180 - 42, 50, 50);
            ellipse(1053 - 66, 180 - 42, 50, 50);
            ellipse(1182 - 66, 180 - 42, 50, 50);
                ellipse(277 - 66, 260 - 42, 50, 50);
                ellipse(408 - 66, 260 - 42, 50, 50);
                ellipse(537 - 66, 260 - 42, 50, 50);
                ellipse(666 - 66, 260 - 42, 50, 50);
                ellipse(795 - 66, 260 - 42, 50, 50);
                ellipse(924 - 66, 260 - 42, 50, 50);
                ellipse(1053 - 66, 260 - 42, 50, 50);
                ellipse(1182 - 66, 260 - 42, 50, 50);
                    ellipse(277 - 66, 340 - 42, 50, 50);
                    ellipse(408 - 66, 340 - 42, 50, 50);
                    ellipse(537 - 66, 340 - 42, 50, 50);
                    ellipse(666 - 66, 340 - 42, 50, 50);
                    ellipse(795 - 66, 340 - 42, 50, 50);
                    ellipse(924 - 66, 340 - 42, 50, 50);
                    ellipse(1053 - 66, 340 - 42, 50, 50);
                    ellipse(1182 - 66, 340 - 42, 50, 50);
                        ellipse(277 - 66, 420 - 42, 50, 50);
                        ellipse(408 - 66, 420 - 42, 50, 50);
                        ellipse(537 - 66, 420 - 42, 50, 50);
                        ellipse(666 - 66, 420 - 42, 50, 50);
                        ellipse(795 - 66, 420 - 42, 50, 50);
                        ellipse(924 - 66, 420 - 42, 50, 50);
                        ellipse(1053 - 66, 420 - 42, 50, 50);
                        ellipse(1182 - 66, 420 - 42, 50, 50);
                            ellipse(277 - 66, 500 - 42, 50, 50);
                            ellipse(408 - 66, 500 - 42, 50, 50);
                            ellipse(537 - 66, 500 - 42, 50, 50);
                            ellipse(666 - 66, 500 - 42, 50, 50);
                            ellipse(795 - 66, 500 - 42, 50, 50);
                            ellipse(924 - 66, 500 - 42, 50, 50);
                            ellipse(1053 - 66, 500 - 42, 50, 50);
                            ellipse(1182 - 66, 500 - 42, 50, 50);
                                ellipse(277 - 66, 580 - 42, 50, 50);
                                ellipse(408 - 66, 580 - 42, 50, 50);
                                ellipse(537 - 66, 580 - 42, 50, 50);
                                ellipse(666 - 66, 580 - 42, 50, 50);
                                ellipse(795 - 66, 580 - 42, 50, 50);
                                ellipse(924 - 66, 580 - 42, 50, 50);
                                ellipse(1053 - 66, 580 - 42, 50, 50);
                                ellipse(1182 - 66, 580 - 42, 50, 50);
        fill(150, 150, 150);
        rect(10, 600, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 610 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 610, lineX, 1170);
        }
        
        text("hecornercornerbaka", 30, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062,620, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510 + 590, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 770 - 42, 50, 50);
            ellipse(408 - 66, 770 - 42, 50, 50);
            ellipse(537 - 66, 770 - 42, 50, 50);
            ellipse(666 - 66, 770 - 42, 50, 50);
            ellipse(795 - 66, 770 - 42, 50, 50);
            ellipse(924 - 66, 770 - 42, 50, 50);
            ellipse(1053 - 66, 770 - 42, 50, 50);
            ellipse(1182 - 66, 770 - 42, 50, 50);
                ellipse(277 - 66, 850 - 42, 50, 50);
                ellipse(408 - 66, 850 - 42, 50, 50);
                ellipse(537 - 66, 850 - 42, 50, 50);
                ellipse(666 - 66, 850 - 42, 50, 50);
                ellipse(795 - 66, 850 - 42, 50, 50);
                ellipse(924 - 66, 850 - 42, 50, 50);
                ellipse(1053 - 66, 850 - 42, 50, 50);
                ellipse(1182 - 66, 850 - 42, 50, 50);
                    ellipse(277 - 66, 930 - 42, 50, 50);
                    ellipse(408 - 66, 930 - 42, 50, 50);
                    ellipse(537 - 66, 930 - 42, 50, 50);
                    ellipse(666 - 66, 930 - 42, 50, 50);
                    ellipse(795 - 66, 930 - 42, 50, 50);
                    ellipse(924 - 66, 930 - 42, 50, 50);
                    ellipse(1053 - 66, 930 - 42, 50, 50);
                    ellipse(1182 - 66, 930 - 42, 50, 50);
                        ellipse(277 - 66, 1010 - 42, 50, 50);
                        ellipse(408 - 66, 1010 - 42, 50, 50);
                        ellipse(537 - 66, 1010 - 42, 50, 50);
                        ellipse(666 - 66, 1010 - 42, 50, 50);
                        ellipse(795 - 66, 1010 - 42, 50, 50);
                        ellipse(924 - 66, 1010 - 42, 50, 50);
                        ellipse(1053 - 66, 1010 - 42, 50, 50);
                        ellipse(1182 - 66, 1010 - 42, 50, 50);
                            ellipse(277 - 66, 1090 - 42, 50, 50);
                            ellipse(408 - 66, 1090 - 42, 50, 50);
                            ellipse(537 - 66, 1090 - 42, 50, 50);
                            ellipse(666 - 66, 1090 - 42, 50, 50);
                            ellipse(795 - 66, 1090 - 42, 50, 50);
                            ellipse(924 - 66, 1090 - 42, 50, 50);
                            ellipse(1053 - 66, 1090 - 42, 50, 50);
                            ellipse(1182 - 66, 1090 - 42, 50, 50);
                                ellipse(277 - 66, 1170 - 42, 50, 50);
                                ellipse(408 - 66, 1170 - 42, 50, 50);
                                ellipse(537 - 66, 1170 - 42, 50, 50);
                                ellipse(666 - 66, 1170 - 42, 50, 50);
                                ellipse(795 - 66, 1170 - 42, 50, 50);
                                ellipse(924 - 66, 1170 - 42, 50, 50);
                                ellipse(1053 - 66, 1170 - 42, 50, 50);
                                ellipse(1182 - 66, 1170 - 42, 50, 50);
    } else if (set === "Set3") {
        gameBoard = 3;
        clear();
        fill(150, 150, 150);
        rect(10, 10, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 20 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 20, lineX, 580);
        }
        
        text("hecornercornerbaka", 30, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062, 30, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 180 - 42, 50, 50);
            ellipse(408 - 66, 180 - 42, 50, 50);
            ellipse(537 - 66, 180 - 42, 50, 50);
            ellipse(666 - 66, 180 - 42, 50, 50);
            ellipse(795 - 66, 180 - 42, 50, 50);
            ellipse(924 - 66, 180 - 42, 50, 50);
            ellipse(1053 - 66, 180 - 42, 50, 50);
            ellipse(1182 - 66, 180 - 42, 50, 50);
                ellipse(277 - 66, 260 - 42, 50, 50);
                ellipse(408 - 66, 260 - 42, 50, 50);
                ellipse(537 - 66, 260 - 42, 50, 50);
                ellipse(666 - 66, 260 - 42, 50, 50);
                ellipse(795 - 66, 260 - 42, 50, 50);
                ellipse(924 - 66, 260 - 42, 50, 50);
                ellipse(1053 - 66, 260 - 42, 50, 50);
                ellipse(1182 - 66, 260 - 42, 50, 50);
                    ellipse(277 - 66, 340 - 42, 50, 50);
                    ellipse(408 - 66, 340 - 42, 50, 50);
                    ellipse(537 - 66, 340 - 42, 50, 50);
                    ellipse(666 - 66, 340 - 42, 50, 50);
                    ellipse(795 - 66, 340 - 42, 50, 50);
                    ellipse(924 - 66, 340 - 42, 50, 50);
                    ellipse(1053 - 66, 340 - 42, 50, 50);
                    ellipse(1182 - 66, 340 - 42, 50, 50);
                        ellipse(277 - 66, 420 - 42, 50, 50);
                        ellipse(408 - 66, 420 - 42, 50, 50);
                        ellipse(537 - 66, 420 - 42, 50, 50);
                        ellipse(666 - 66, 420 - 42, 50, 50);
                        ellipse(795 - 66, 420 - 42, 50, 50);
                        ellipse(924 - 66, 420 - 42, 50, 50);
                        ellipse(1053 - 66, 420 - 42, 50, 50);
                        ellipse(1182 - 66, 420 - 42, 50, 50);
                            ellipse(277 - 66, 500 - 42, 50, 50);
                            ellipse(408 - 66, 500 - 42, 50, 50);
                            ellipse(537 - 66, 500 - 42, 50, 50);
                            ellipse(666 - 66, 500 - 42, 50, 50);
                            ellipse(795 - 66, 500 - 42, 50, 50);
                            ellipse(924 - 66, 500 - 42, 50, 50);
                            ellipse(1053 - 66, 500 - 42, 50, 50);
                            ellipse(1182 - 66, 500 - 42, 50, 50);
                                ellipse(277 - 66, 580 - 42, 50, 50);
                                ellipse(408 - 66, 580 - 42, 50, 50);
                                ellipse(537 - 66, 580 - 42, 50, 50);
                                ellipse(666 - 66, 580 - 42, 50, 50);
                                ellipse(795 - 66, 580 - 42, 50, 50);
                                ellipse(924 - 66, 580 - 42, 50, 50);
                                ellipse(1053 - 66, 580 - 42, 50, 50);
                                ellipse(1182 - 66, 580 - 42, 50, 50);
        fill(150, 150, 150);
        rect(10, 600, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 610 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 610, lineX, 1170);
        }
        
        text("hecornercornerbaka", 30, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062,620, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510 + 590, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 770 - 42, 50, 50);
            ellipse(408 - 66, 770 - 42, 50, 50);
            ellipse(537 - 66, 770 - 42, 50, 50);
            ellipse(666 - 66, 770 - 42, 50, 50);
            ellipse(795 - 66, 770 - 42, 50, 50);
            ellipse(924 - 66, 770 - 42, 50, 50);
            ellipse(1053 - 66, 770 - 42, 50, 50);
            ellipse(1182 - 66, 770 - 42, 50, 50);
                ellipse(277 - 66, 850 - 42, 50, 50);
                ellipse(408 - 66, 850 - 42, 50, 50);
                ellipse(537 - 66, 850 - 42, 50, 50);
                ellipse(666 - 66, 850 - 42, 50, 50);
                ellipse(795 - 66, 850 - 42, 50, 50);
                ellipse(924 - 66, 850 - 42, 50, 50);
                ellipse(1053 - 66, 850 - 42, 50, 50);
                ellipse(1182 - 66, 850 - 42, 50, 50);
                    ellipse(277 - 66, 930 - 42, 50, 50);
                    ellipse(408 - 66, 930 - 42, 50, 50);
                    ellipse(537 - 66, 930 - 42, 50, 50);
                    ellipse(666 - 66, 930 - 42, 50, 50);
                    ellipse(795 - 66, 930 - 42, 50, 50);
                    ellipse(924 - 66, 930 - 42, 50, 50);
                    ellipse(1053 - 66, 930 - 42, 50, 50);
                    ellipse(1182 - 66, 930 - 42, 50, 50);
                        ellipse(277 - 66, 1010 - 42, 50, 50);
                        ellipse(408 - 66, 1010 - 42, 50, 50);
                        ellipse(537 - 66, 1010 - 42, 50, 50);
                        ellipse(666 - 66, 1010 - 42, 50, 50);
                        ellipse(795 - 66, 1010 - 42, 50, 50);
                        ellipse(924 - 66, 1010 - 42, 50, 50);
                        ellipse(1053 - 66, 1010 - 42, 50, 50);
                        ellipse(1182 - 66, 1010 - 42, 50, 50);
                            ellipse(277 - 66, 1090 - 42, 50, 50);
                            ellipse(408 - 66, 1090 - 42, 50, 50);
                            ellipse(537 - 66, 1090 - 42, 50, 50);
                            ellipse(666 - 66, 1090 - 42, 50, 50);
                            ellipse(795 - 66, 1090 - 42, 50, 50);
                            ellipse(924 - 66, 1090 - 42, 50, 50);
                            ellipse(1053 - 66, 1090 - 42, 50, 50);
                            ellipse(1182 - 66, 1090 - 42, 50, 50);
                                ellipse(277 - 66, 1170 - 42, 50, 50);
                                ellipse(408 - 66, 1170 - 42, 50, 50);
                                ellipse(537 - 66, 1170 - 42, 50, 50);
                                ellipse(666 - 66, 1170 - 42, 50, 50);
                                ellipse(795 - 66, 1170 - 42, 50, 50);
                                ellipse(924 - 66, 1170 - 42, 50, 50);
                                ellipse(1053 - 66, 1170 - 42, 50, 50);
                                ellipse(1182 - 66, 1170 - 42, 50, 50);
    } else if (set === "Set4") {
        gameBoard = 4;
        clear();
        fill(150, 150, 150);
        rect(10, 10, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 20 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 20, lineX, 580);
        }
        
        text("hecornercornerbaka", 30, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062, 30, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 180 - 42, 50, 50);
            ellipse(408 - 66, 180 - 42, 50, 50);
            ellipse(537 - 66, 180 - 42, 50, 50);
            ellipse(666 - 66, 180 - 42, 50, 50);
            ellipse(795 - 66, 180 - 42, 50, 50);
            ellipse(924 - 66, 180 - 42, 50, 50);
            ellipse(1053 - 66, 180 - 42, 50, 50);
            ellipse(1182 - 66, 180 - 42, 50, 50);
                ellipse(277 - 66, 260 - 42, 50, 50);
                ellipse(408 - 66, 260 - 42, 50, 50);
                ellipse(537 - 66, 260 - 42, 50, 50);
                ellipse(666 - 66, 260 - 42, 50, 50);
                ellipse(795 - 66, 260 - 42, 50, 50);
                ellipse(924 - 66, 260 - 42, 50, 50);
                ellipse(1053 - 66, 260 - 42, 50, 50);
                ellipse(1182 - 66, 260 - 42, 50, 50);
                    ellipse(277 - 66, 340 - 42, 50, 50);
                    ellipse(408 - 66, 340 - 42, 50, 50);
                    ellipse(537 - 66, 340 - 42, 50, 50);
                    ellipse(666 - 66, 340 - 42, 50, 50);
                    ellipse(795 - 66, 340 - 42, 50, 50);
                    ellipse(924 - 66, 340 - 42, 50, 50);
                    ellipse(1053 - 66, 340 - 42, 50, 50);
                    ellipse(1182 - 66, 340 - 42, 50, 50);
                        ellipse(277 - 66, 420 - 42, 50, 50);
                        ellipse(408 - 66, 420 - 42, 50, 50);
                        ellipse(537 - 66, 420 - 42, 50, 50);
                        ellipse(666 - 66, 420 - 42, 50, 50);
                        ellipse(795 - 66, 420 - 42, 50, 50);
                        ellipse(924 - 66, 420 - 42, 50, 50);
                        ellipse(1053 - 66, 420 - 42, 50, 50);
                        ellipse(1182 - 66, 420 - 42, 50, 50);
                            ellipse(277 - 66, 500 - 42, 50, 50);
                            ellipse(408 - 66, 500 - 42, 50, 50);
                            ellipse(537 - 66, 500 - 42, 50, 50);
                            ellipse(666 - 66, 500 - 42, 50, 50);
                            ellipse(795 - 66, 500 - 42, 50, 50);
                            ellipse(924 - 66, 500 - 42, 50, 50);
                            ellipse(1053 - 66, 500 - 42, 50, 50);
                            ellipse(1182 - 66, 500 - 42, 50, 50);
                                ellipse(277 - 66, 580 - 42, 50, 50);
                                ellipse(408 - 66, 580 - 42, 50, 50);
                                ellipse(537 - 66, 580 - 42, 50, 50);
                                ellipse(666 - 66, 580 - 42, 50, 50);
                                ellipse(795 - 66, 580 - 42, 50, 50);
                                ellipse(924 - 66, 580 - 42, 50, 50);
                                ellipse(1053 - 66, 580 - 42, 50, 50);
                                ellipse(1182 - 66, 580 - 42, 50, 50);
        fill(150, 150, 150);
        rect(10, 600, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 610 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 610, lineX, 1170);
        }
        
        text("hecornercornerbaka", 30, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062,620, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510 + 590, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 770 - 42, 50, 50);
            ellipse(408 - 66, 770 - 42, 50, 50);
            ellipse(537 - 66, 770 - 42, 50, 50);
            ellipse(666 - 66, 770 - 42, 50, 50);
            ellipse(795 - 66, 770 - 42, 50, 50);
            ellipse(924 - 66, 770 - 42, 50, 50);
            ellipse(1053 - 66, 770 - 42, 50, 50);
            ellipse(1182 - 66, 770 - 42, 50, 50);
                ellipse(277 - 66, 850 - 42, 50, 50);
                ellipse(408 - 66, 850 - 42, 50, 50);
                ellipse(537 - 66, 850 - 42, 50, 50);
                ellipse(666 - 66, 850 - 42, 50, 50);
                ellipse(795 - 66, 850 - 42, 50, 50);
                ellipse(924 - 66, 850 - 42, 50, 50);
                ellipse(1053 - 66, 850 - 42, 50, 50);
                ellipse(1182 - 66, 850 - 42, 50, 50);
                    ellipse(277 - 66, 930 - 42, 50, 50);
                    ellipse(408 - 66, 930 - 42, 50, 50);
                    ellipse(537 - 66, 930 - 42, 50, 50);
                    ellipse(666 - 66, 930 - 42, 50, 50);
                    ellipse(795 - 66, 930 - 42, 50, 50);
                    ellipse(924 - 66, 930 - 42, 50, 50);
                    ellipse(1053 - 66, 930 - 42, 50, 50);
                    ellipse(1182 - 66, 930 - 42, 50, 50);
                        ellipse(277 - 66, 1010 - 42, 50, 50);
                        ellipse(408 - 66, 1010 - 42, 50, 50);
                        ellipse(537 - 66, 1010 - 42, 50, 50);
                        ellipse(666 - 66, 1010 - 42, 50, 50);
                        ellipse(795 - 66, 1010 - 42, 50, 50);
                        ellipse(924 - 66, 1010 - 42, 50, 50);
                        ellipse(1053 - 66, 1010 - 42, 50, 50);
                        ellipse(1182 - 66, 1010 - 42, 50, 50);
                            ellipse(277 - 66, 1090 - 42, 50, 50);
                            ellipse(408 - 66, 1090 - 42, 50, 50);
                            ellipse(537 - 66, 1090 - 42, 50, 50);
                            ellipse(666 - 66, 1090 - 42, 50, 50);
                            ellipse(795 - 66, 1090 - 42, 50, 50);
                            ellipse(924 - 66, 1090 - 42, 50, 50);
                            ellipse(1053 - 66, 1090 - 42, 50, 50);
                            ellipse(1182 - 66, 1090 - 42, 50, 50);
                                ellipse(277 - 66, 1170 - 42, 50, 50);
                                ellipse(408 - 66, 1170 - 42, 50, 50);
                                ellipse(537 - 66, 1170 - 42, 50, 50);
                                ellipse(666 - 66, 1170 - 42, 50, 50);
                                ellipse(795 - 66, 1170 - 42, 50, 50);
                                ellipse(924 - 66, 1170 - 42, 50, 50);
                                ellipse(1053 - 66, 1170 - 42, 50, 50);
                                ellipse(1182 - 66, 1170 - 42, 50, 50);
    } else if (set === "Set5") {
        gameBoard = 5;
        clear();
        fill(150, 150, 150);
        rect(10, 10, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 20 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 20, lineX, 580);
        }
        
        text("hecornercornerbaka", 30, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 30, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062, 30, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 180 - 42, 50, 50);
            ellipse(408 - 66, 180 - 42, 50, 50);
            ellipse(537 - 66, 180 - 42, 50, 50);
            ellipse(666 - 66, 180 - 42, 50, 50);
            ellipse(795 - 66, 180 - 42, 50, 50);
            ellipse(924 - 66, 180 - 42, 50, 50);
            ellipse(1053 - 66, 180 - 42, 50, 50);
            ellipse(1182 - 66, 180 - 42, 50, 50);
                ellipse(277 - 66, 260 - 42, 50, 50);
                ellipse(408 - 66, 260 - 42, 50, 50);
                ellipse(537 - 66, 260 - 42, 50, 50);
                ellipse(666 - 66, 260 - 42, 50, 50);
                ellipse(795 - 66, 260 - 42, 50, 50);
                ellipse(924 - 66, 260 - 42, 50, 50);
                ellipse(1053 - 66, 260 - 42, 50, 50);
                ellipse(1182 - 66, 260 - 42, 50, 50);
                    ellipse(277 - 66, 340 - 42, 50, 50);
                    ellipse(408 - 66, 340 - 42, 50, 50);
                    ellipse(537 - 66, 340 - 42, 50, 50);
                    ellipse(666 - 66, 340 - 42, 50, 50);
                    ellipse(795 - 66, 340 - 42, 50, 50);
                    ellipse(924 - 66, 340 - 42, 50, 50);
                    ellipse(1053 - 66, 340 - 42, 50, 50);
                    ellipse(1182 - 66, 340 - 42, 50, 50);
                        ellipse(277 - 66, 420 - 42, 50, 50);
                        ellipse(408 - 66, 420 - 42, 50, 50);
                        ellipse(537 - 66, 420 - 42, 50, 50);
                        ellipse(666 - 66, 420 - 42, 50, 50);
                        ellipse(795 - 66, 420 - 42, 50, 50);
                        ellipse(924 - 66, 420 - 42, 50, 50);
                        ellipse(1053 - 66, 420 - 42, 50, 50);
                        ellipse(1182 - 66, 420 - 42, 50, 50);
                            ellipse(277 - 66, 500 - 42, 50, 50);
                            ellipse(408 - 66, 500 - 42, 50, 50);
                            ellipse(537 - 66, 500 - 42, 50, 50);
                            ellipse(666 - 66, 500 - 42, 50, 50);
                            ellipse(795 - 66, 500 - 42, 50, 50);
                            ellipse(924 - 66, 500 - 42, 50, 50);
                            ellipse(1053 - 66, 500 - 42, 50, 50);
                            ellipse(1182 - 66, 500 - 42, 50, 50);
                                ellipse(277 - 66, 580 - 42, 50, 50);
                                ellipse(408 - 66, 580 - 42, 50, 50);
                                ellipse(537 - 66, 580 - 42, 50, 50);
                                ellipse(666 - 66, 580 - 42, 50, 50);
                                ellipse(795 - 66, 580 - 42, 50, 50);
                                ellipse(924 - 66, 580 - 42, 50, 50);
                                ellipse(1053 - 66, 580 - 42, 50, 50);
                                ellipse(1182 - 66, 580 - 42, 50, 50);
        fill(150, 150, 150);
        rect(10, 600, 1180, 580);
        fill(0, 0, 0);
        textSize(12);
        for (var i = 0; i < 8; i++) {
            var lineY = 610 + (i * 80);
            line(20, lineY, 1180, lineY);
        }
        for (var x = 0; x < 10; x++) {
            var lineX = 20 + (x * 129);
            line(lineX, 610, lineX, 1170);
        }
        
        text("hecornercornerbaka", 30, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 159, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 288, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 417, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 546, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 675, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 804, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 933, 620, 129, 80)
        text("hexxxxxxxxxxxxxxxx", 1062,620, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 110 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 190 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 270 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 350 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 430 + 590, 129, 80)
        text("heyyyyyyyyyyyyyyyy", 30, 510 + 590, 129, 80)
            fill(150, 150, 150);
            ellipse(277 - 66, 770 - 42, 50, 50);
            ellipse(408 - 66, 770 - 42, 50, 50);
            ellipse(537 - 66, 770 - 42, 50, 50);
            ellipse(666 - 66, 770 - 42, 50, 50);
            ellipse(795 - 66, 770 - 42, 50, 50);
            ellipse(924 - 66, 770 - 42, 50, 50);
            ellipse(1053 - 66, 770 - 42, 50, 50);
            ellipse(1182 - 66, 770 - 42, 50, 50);
                ellipse(277 - 66, 850 - 42, 50, 50);
                ellipse(408 - 66, 850 - 42, 50, 50);
                ellipse(537 - 66, 850 - 42, 50, 50);
                ellipse(666 - 66, 850 - 42, 50, 50);
                ellipse(795 - 66, 850 - 42, 50, 50);
                ellipse(924 - 66, 850 - 42, 50, 50);
                ellipse(1053 - 66, 850 - 42, 50, 50);
                ellipse(1182 - 66, 850 - 42, 50, 50);
                    ellipse(277 - 66, 930 - 42, 50, 50);
                    ellipse(408 - 66, 930 - 42, 50, 50);
                    ellipse(537 - 66, 930 - 42, 50, 50);
                    ellipse(666 - 66, 930 - 42, 50, 50);
                    ellipse(795 - 66, 930 - 42, 50, 50);
                    ellipse(924 - 66, 930 - 42, 50, 50);
                    ellipse(1053 - 66, 930 - 42, 50, 50);
                    ellipse(1182 - 66, 930 - 42, 50, 50);
                        ellipse(277 - 66, 1010 - 42, 50, 50);
                        ellipse(408 - 66, 1010 - 42, 50, 50);
                        ellipse(537 - 66, 1010 - 42, 50, 50);
                        ellipse(666 - 66, 1010 - 42, 50, 50);
                        ellipse(795 - 66, 1010 - 42, 50, 50);
                        ellipse(924 - 66, 1010 - 42, 50, 50);
                        ellipse(1053 - 66, 1010 - 42, 50, 50);
                        ellipse(1182 - 66, 1010 - 42, 50, 50);
                            ellipse(277 - 66, 1090 - 42, 50, 50);
                            ellipse(408 - 66, 1090 - 42, 50, 50);
                            ellipse(537 - 66, 1090 - 42, 50, 50);
                            ellipse(666 - 66, 1090 - 42, 50, 50);
                            ellipse(795 - 66, 1090 - 42, 50, 50);
                            ellipse(924 - 66, 1090 - 42, 50, 50);
                            ellipse(1053 - 66, 1090 - 42, 50, 50);
                            ellipse(1182 - 66, 1090 - 42, 50, 50);
                                ellipse(277 - 66, 1170 - 42, 50, 50);
                                ellipse(408 - 66, 1170 - 42, 50, 50);
                                ellipse(537 - 66, 1170 - 42, 50, 50);
                                ellipse(666 - 66, 1170 - 42, 50, 50);
                                ellipse(795 - 66, 1170 - 42, 50, 50);
                                ellipse(924 - 66, 1170 - 42, 50, 50);
                                ellipse(1053 - 66, 1170 - 42, 50, 50);
                                ellipse(1182 - 66, 1170 - 42, 50, 50);
    } else if (set === "Rules") {
        gameBoard = 0;
    }
    
}



function draw() {
  
    if (gameBoard === 0) {
        background(120, 120, 255);
        fill(150, 150, 150);
        rect(10, 10, 1180, 580);
        textSize(30);
        fill(0, 0, 0);
        text(
        "How to play:\n\n"+
        "1. Place your ships without showing your screen to your partner\n\n"+
        "2. To guess a square, you must use that subject and verb in a sentence\n"+
        '(ex: "ich darf Wasser trinken", "Die Katzen müssen schlafen", "Können Sie schwimmen?").\n\n'+
        "3. When your partner guesses, tell them if they hit or miss. if they hit and their verb form is correct, click that part of your ship with the red peg. If they miss or misuse the verb, it's your turn.\n\n"+
        "4. When you're the one guessing, mark on your board for each square you guessed if it's a hit or a miss."
        , 20, 20, 1170, 560);
    }
    if (gameBoard !== 0) {
    rect(1200, 100, 90, 90);
    fill(0);
    text("Hit = H",1205, 110, 80, 140)
    text("Miss = M",1205, 130, 80, 140)
    text("Ship = S",1205, 150, 80, 140)
    text("Clear = C",1205, 170, 80, 140)
    fill(255, 0, 0)
    ellipse(1270, 115, 15, 15)
    fill(255)
    ellipse(1270, 135, 15, 15)
    fill(51)
    ellipse(1270, 155, 15, 15)
    fill(150, 150, 150)
    ellipse(1270, 175, 15, 15)
    
    fill(150, 150, 150);
    if (keyCode === 67) {
        fill(150, 150, 150);
    } else if (keyCode === 72) {
        fill(255, 0, 0);
    } else if (keyCode === 77) {
        fill(255, 255, 255);
    } else if (keyCode === 83) {
        fill(51);
    }
    ellipse(1230, 40, 50, 50);
    
    
    
    }
}

function mouseClicked() {
    if (keyCode === 67) {
        fill(150, 150, 150);
    } else if (keyCode === 72) {
        fill(255, 0, 0);
    } else if (keyCode === 77) {
        fill(255, 255, 255);
    } else if (keyCode === 83) {
        fill(51);
    }
    
    
    if(mouseX > 150 && mouseX < 277 && mouseY > 100 && mouseY < 180) {
    ellipse(277 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 279 && mouseX < 396 && mouseY > 100 && mouseY < 180) {
    ellipse(408 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 408 && mouseX < 537 && mouseY > 100 && mouseY < 180) {
    ellipse(537 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 537 && mouseX < 666 && mouseY > 100 && mouseY < 180) {
    ellipse(666 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 666 && mouseX < 795 && mouseY > 100 && mouseY < 180) {
    ellipse(795 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 795 && mouseX < 924 && mouseY > 100 && mouseY < 180) {
    ellipse(924 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 924 && mouseX < 1053 && mouseY > 100 && mouseY < 180) {
    ellipse(1053 - 66, 180 - 42, 50, 50);
    } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 100 && mouseY < 180) {
    ellipse(1182 - 66, 180 - 42, 50, 50);
        } else if(mouseX > 150 && mouseX < 277 && mouseY > 180 && mouseY < 260) {
        ellipse(277 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 279 && mouseX < 396 && mouseY > 180 && mouseY < 260) {
        ellipse(408 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 408 && mouseX < 537 && mouseY > 180 && mouseY < 260) {
        ellipse(537 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 537 && mouseX < 666 && mouseY > 180 && mouseY < 260) {
        ellipse(666 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 666 && mouseX < 795 && mouseY > 180 && mouseY < 260) {
        ellipse(795 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 795 && mouseX < 924 && mouseY > 180 && mouseY < 260) {
        ellipse(924 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 924 && mouseX < 1053 && mouseY > 180 && mouseY < 260) {
        ellipse(1053 - 66, 260 - 42, 50, 50);
        } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 180 && mouseY < 260) {
        ellipse(1182 - 66, 260 - 42, 50, 50);
            } else if(mouseX > 150 && mouseX < 277 && mouseY > 260 && mouseY < 340) {
            ellipse(277 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 279 && mouseX < 396 && mouseY > 260 && mouseY < 340) {
            ellipse(408 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 408 && mouseX < 537 && mouseY > 260 && mouseY < 340) {
            ellipse(537 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 537 && mouseX < 666 && mouseY > 260 && mouseY < 340) {
            ellipse(666 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 666 && mouseX < 795 && mouseY > 260 && mouseY < 340) {
            ellipse(795 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 795 && mouseX < 924 && mouseY > 260 && mouseY < 340) {
            ellipse(924 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 924 && mouseX < 1053 && mouseY > 260 && mouseY < 340) {
            ellipse(1053 - 66, 340 - 42, 50, 50);
            } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 260 && mouseY < 340) {
            ellipse(1182 - 66, 340 - 42, 50, 50);
                } else if(mouseX > 150 && mouseX < 277 && mouseY > 340 && mouseY < 420) {
                ellipse(277 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 279 && mouseX < 396 && mouseY > 340 && mouseY < 420) {
                ellipse(408 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 408 && mouseX < 537 && mouseY > 340 && mouseY < 420) {
                ellipse(537 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 537 && mouseX < 666 && mouseY > 340 && mouseY < 420) {
                ellipse(666 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 666 && mouseX < 795 && mouseY > 340 && mouseY < 420) {
                ellipse(795 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 795 && mouseX < 924 && mouseY > 340 && mouseY < 420) {
                ellipse(924 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 924 && mouseX < 1053 && mouseY > 340 && mouseY < 420) {
                ellipse(1053 - 66, 420 - 42, 50, 50);
                } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 340 && mouseY < 420) {
                ellipse(1182 - 66, 420 - 42, 50, 50);
                    } else if(mouseX > 150 && mouseX < 277 && mouseY > 420 && mouseY < 500) {
                    ellipse(277 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 279 && mouseX < 396 && mouseY > 420 && mouseY < 500) {
                    ellipse(408 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 408 && mouseX < 537 && mouseY > 420 && mouseY < 500) {
                    ellipse(537 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 537 && mouseX < 666 && mouseY > 420 && mouseY < 500) {
                    ellipse(666 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 666 && mouseX < 795 && mouseY > 420 && mouseY < 500) {
                    ellipse(795 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 795 && mouseX < 924 && mouseY > 420 && mouseY < 500) {
                    ellipse(924 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 924 && mouseX < 1053 && mouseY > 420 && mouseY < 500) {
                    ellipse(1053 - 66, 500 - 42, 50, 50);
                    } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 420 && mouseY < 500) {
                    ellipse(1182 - 66, 500 - 42, 50, 50);
                        } else if(mouseX > 150 && mouseX < 277 && mouseY > 500 && mouseY < 580) {
                        ellipse(277 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 279 && mouseX < 396 && mouseY > 500 && mouseY < 580) {
                        ellipse(408 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 408 && mouseX < 537 && mouseY > 500 && mouseY < 580) {
                        ellipse(537 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 537 && mouseX < 666 && mouseY > 500 && mouseY < 580) {
                        ellipse(666 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 666 && mouseX < 795 && mouseY > 500 && mouseY < 580) {
                        ellipse(795 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 795 && mouseX < 924 && mouseY > 500 && mouseY < 580) {
                        ellipse(924 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 924 && mouseX < 1053 && mouseY > 500 && mouseY < 580) {
                        ellipse(1053 - 66, 580 - 42, 50, 50);
                        } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 500 && mouseY < 580) {
                        ellipse(1182 - 66, 580 - 42, 50, 50);
                                } else if (mouseX > 150 && mouseX < 277 && mouseY > 690 && mouseY < 770) {
                                ellipse(277 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 279 && mouseX < 396 && mouseY > 690 && mouseY < 770) {
                                ellipse(408 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 408 && mouseX < 537 && mouseY > 690 && mouseY < 770) {
                                ellipse(537 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 537 && mouseX < 666 && mouseY > 690 && mouseY < 770) {
                                ellipse(666 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 666 && mouseX < 795 && mouseY > 690 && mouseY < 770) {
                                ellipse(795 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 795 && mouseX < 924 && mouseY > 690 && mouseY < 770) {
                                ellipse(924 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 924 && mouseX < 1053 && mouseY > 690 && mouseY < 770) {
                                ellipse(1053 - 66, 770 - 42, 50, 50);
                                } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 690 && mouseY < 770) {
                                ellipse(1182 - 66, 770 - 42, 50, 50);
                                    } else if(mouseX > 150 && mouseX < 277 && mouseY > 770 && mouseY < 850) {
                                    ellipse(277 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 279 && mouseX < 396 && mouseY > 770 && mouseY < 850) {
                                    ellipse(408 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 408 && mouseX < 537 && mouseY > 770 && mouseY < 850) {
                                    ellipse(537 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 537 && mouseX < 666 && mouseY > 770 && mouseY < 850) {
                                    ellipse(666 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 666 && mouseX < 795 && mouseY > 770 && mouseY < 850) {
                                    ellipse(795 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 795 && mouseX < 924 && mouseY > 770 && mouseY < 850) {
                                    ellipse(924 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 924 && mouseX < 1053 && mouseY > 770 && mouseY < 850) {
                                    ellipse(1053 - 66, 850 - 42, 50, 50);
                                    } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 770 && mouseY < 850) {
                                    ellipse(1182 - 66, 850 - 42, 50, 50);
                                        } else if(mouseX > 150 && mouseX < 277 && mouseY > 850 && mouseY < 930) {
                                        ellipse(277 - 66, 930 - 42, 50, 50);
                        
                                        } else if(mouseX > 279 && mouseX < 396 && mouseY > 850 && mouseY < 930) {
                                        ellipse(408 - 66, 930 - 42, 50, 50);
                        
                                        } else if(mouseX > 408 && mouseX < 537 && mouseY > 850 && mouseY < 930) {
                                        ellipse(537 - 66, 930 - 42, 50, 50);
                    
                                        } else if(mouseX > 537 && mouseX < 666 && mouseY > 850 && mouseY < 930) {
                                        ellipse(666 - 66, 930 - 42, 50, 50);
                            
                                        } else if(mouseX > 666 && mouseX < 795 && mouseY > 850 && mouseY < 930) {
                                        ellipse(795 - 66, 930 - 42, 50, 50);
                        
                                        } else if(mouseX > 795 && mouseX < 924 && mouseY > 850 && mouseY < 930) {
                                        ellipse(924 - 66, 930 - 42, 50, 50);
                        
                                        } else if(mouseX > 924 && mouseX < 1053 && mouseY > 850 && mouseY < 930) {
                                        ellipse(1053 - 66, 930 - 42, 50, 50);
                    
                                        } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 850 && mouseY < 930) {
                                        ellipse(1182 - 66, 930 - 42, 50, 50);        
                                            } else if(mouseX > 150 && mouseX < 277 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(277 - 66, 1010 - 42, 50, 50);
                            
                                            } else if(mouseX > 279 && mouseX < 396 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(408 - 66, 1010 - 42, 50, 50);
                            
                                            } else if(mouseX > 408 && mouseX < 537 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(537 - 66, 1010 - 42, 50, 50);
                            
                                            } else if(mouseX > 537 && mouseX < 666 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(666 - 66, 1010 - 42, 50, 50);
                            
                                            } else if(mouseX > 666 && mouseX < 795 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(795 - 66, 1010 - 42, 50, 50);
                            
                                            } else if(mouseX > 795 && mouseX < 924 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(924 - 66, 1010 - 42, 50, 50);
                        
                                            } else if(mouseX > 924 && mouseX < 1053 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(1053 - 66, 1010 - 42, 50, 50);
                                
                                            } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 930 && mouseY < 1010) {
                                            ellipse(1182 - 66, 1010 - 42, 50, 50);    
                                                } else if(mouseX > 150 && mouseX < 277 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(277 - 66, 1090 - 42, 50, 50);
                                
                                                } else if(mouseX > 279 && mouseX < 396 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(408 - 66, 1090 - 42, 50, 50);
                                
                                                } else if(mouseX > 408 && mouseX < 537 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(537 - 66, 1090 - 42, 50, 50);
                                
                                                } else if(mouseX > 537 && mouseX < 666 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(666 - 66, 1090 - 42, 50, 50);
                            
                                                } else if(mouseX > 666 && mouseX < 795 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(795 - 66, 1090 - 42, 50, 50);
                            
                                                } else if(mouseX > 795 && mouseX < 924 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(924 - 66, 1090 - 42, 50, 50);
                            
                                                } else if(mouseX > 924 && mouseX < 1053 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(1053 - 66, 1090 - 42, 50, 50);
                                            
                                                } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 1010 && mouseY < 1090) {
                                                ellipse(1182 - 66, 1090 - 42, 50, 50);    
                                                    } else if(mouseX > 150 && mouseX < 277 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(277 - 66, 1170 - 42, 50, 50);
                                    
                                                    } else if(mouseX > 279 && mouseX < 396 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(408 - 66, 1170 - 42, 50, 50);
                                    
                                                    } else if(mouseX > 408 && mouseX < 537 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(537 - 66, 1170 - 42, 50, 50);
                                   
                                                    } else if(mouseX > 537 && mouseX < 666 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(666 - 66, 1170 - 42, 50, 50);
                                   
                                                    } else if(mouseX > 666 && mouseX < 795 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(795 - 66, 1170 - 42, 50, 50);
                                      
                                                    } else if(mouseX > 795 && mouseX < 924 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(924 - 66, 1170 - 42, 50, 50);
                                    
                                                    } else if(mouseX > 924 && mouseX < 1053 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(1053 - 66, 1170 - 42, 50, 50);
                                    
                                                    } else if(mouseX > 1053 && mouseX < 1182 && mouseY > 1090 && mouseY < 1170) {
                                                    ellipse(1182 - 66, 1170 - 42, 50, 50);    
                                                    } 
    
    
    
    
    
    
    
    
}
