window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var animal=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee",
        "cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog",
        "giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion",
        "lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal",
        "shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra"];
    var country=["Afghanistan","Argentina","Australia","Azerbaijan","Belgium","Brazil","Bulgaria",
        "Canada","China","Colombia","Croatia","Cuba","Cyprus","Czech-Republic","Denmark",,"Egypt",
        "Finland","France","Germany","Greece","India","Iran","Iraq","Ireland","Italy","Jamaica","Japan",
        "Kenya","Luxembourg","Mexico","Netherlands","Nigeria","Norway","Pakistan","Poland","Portugal","Romania",
        "Russia","Spain","Switzerland","Syria","Turkey","Turkmenistan","United Arab Emirates","United-Kingdom","Ukraine"];
    var capital=["Kabul","Buenos-Aires", "Canberra","Baku","Brussels","Brasilia", "Sofia","Ottawa","Beijing","Bogota",
        "Zagreb", "Havana","Nicosia","Prague","Copenhagen","Cairo","Helsinki","Paris", "Berlin","Athens","New-Delhi",
        "Tehran","Baghdad","Rome", "Kingston", "Tokyo","Nairobi","Luxembourg","Mexico-City","Amsterdam","Abuja","Oslo",
        "Islamabad","Warsaw","Lisbon","Bucharest","Moscow","Madrid","Bern","Damascus","Ankara","Ashgabat","Kyiv","Abu-Dhabi","London"];
    let drawArray=[drawOne,drawTwo,drawThree,drawFour,drawFive,drawSix,drawSeven,drawEight];
    let wordGlobal="";
    let lives=8;
    console.log(alphabet[0].toString());
    function play(){
        lives=8;
        var categories=[animal,country,capital];
        var c=Math.floor(Math.random() * categories.length);
        chooseCat(c);
        var word=categories[c][Math.floor(Math.random() * categories[c].length)];
        word=word.toLowerCase();
        wordGlobal=word;
        console.log(word);
        makeBoxes(word.length);
        var resetClick=document.getElementById("reset");
        if(resetClick)
            resetClick.addEventListener("click",play,false);
        var tryClick=document.getElementById("tryButton");
        if(tryClick)
            tryClick.addEventListener("click",trying,false);
    }

    function chooseCat(c) {
        if (c==0){
            categoryName.innerHTML="The choosen category is Animals";
        }else if (c==1){
            categoryName.innerHTML="The choosen category is Countries";
        }else if (c==2){
            categoryName.innerHTML="The choosen category is Capitals";
        }
    }
    function check() {
        for (var i = 0; i < alphabet.length; i++) {
            let letter=alphabet[i].toString();
            if(letterClick)
            var letterClick=document.getElementById(letter);
                letterClick.addEventListener("click",checking,false);
            function checking() {
                let a=0;
                for (var i = 0; i < wordGlobal.length; i++) {
                    a=i*40;
                    if(wordGlobal[i]===(letter)){
                        var c = document.getElementById("boxCanvas");
                        var ctx = c.getContext("2d");
                        ctx.font = "30px Ubuntu";
                        ctx.fillStyle = "red";
                        ctx.fillText("A", (a+15 + (10 * i)), 55);
                    }
                }
            }
        }
    }
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = alphabet[i];
            list.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    function trying(){
        if(tryText.value.toLowerCase()===wordGlobal)
            mylives.innerHTML="Good job"
        else {
            drawArray[8-lives]();
            lives-=1;
            if(lives==0){
                mylives.innerHTML = "Game over";
            }else {
                mylives.innerHTML = lives + " lives left";
            }
        }
    }
    function makeBoxes(x) {
        var c = document.getElementById("boxCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 2000, 100);
        let a = 0;
        for (let i = 0; i < x; i++) {
            a =i* 40;
            ctx.rect((a+10+ (10 * i)), 25, 40, 40);
            ctx.lineWidth = "3";
            ctx.strokeStyle = "blue";


        }
        ctx.stroke();
    }
    var c = document.getElementById("manCanvas");
    var ctx = c.getContext("2d");
    function drawOne() {
        ctx.moveTo(25, 570);
        ctx.lineWidth = "10";
        ctx.lineTo(125, 570);
        ctx.stroke();
    }

    function drawTwo() {
        ctx.moveTo(75, 570);
        ctx.lineWidth = "10";
        ctx.lineTo(75, 30);
        ctx.stroke();

    }

    function drawThree() {
        ctx.moveTo(70, 30);
        ctx.lineWidth = "10";
        ctx.lineTo(250, 30);
        ctx.moveTo(75, 150);
        ctx.lineWidth = "10";
        ctx.lineTo(170, 30);
        ctx.stroke();

    }

    function drawFour() {
        ctx.moveTo(245, 30);
        ctx.lineWidth = "10";
        ctx.lineTo(245, 150);
        ctx.stroke();

    }

    function drawFive() {
        ctx.beginPath();
        ctx.arc(245, 180, 30, 0, 2 * Math.PI);
        ctx.lineWidth = "10";
        ctx.stroke();

    }

    function drawSix() {
        ctx.moveTo(245, 210);
        ctx.lineWidth = "10";
        ctx.lineTo(245, 350);
        ctx.stroke();

    }

    function drawSeven() {
        ctx.moveTo(245, 250);
        ctx.lineWidth = "10";
        ctx.lineTo(300, 225);
        ctx.moveTo(245, 250);
        ctx.lineWidth = "10";
        ctx.lineTo(190, 225);
        ctx.stroke();

    }

    function drawEight() {

        ctx.moveTo(245, 350);
        ctx.lineWidth = "10";
        ctx.lineTo(300, 400);
        ctx.moveTo(245, 350);
        ctx.lineWidth = "10";
        ctx.lineTo(190, 400);
        ctx.stroke();

    }
    play();
    buttons();
}