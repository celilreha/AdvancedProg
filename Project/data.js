window.onload = function () {
    t5 = { visibility: ["visible","hidden"]};
    t1 = { height: ["10px", "300px","10px"] };
    t2 = { width: ["10px", "300px","10px"] };
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z','-'];
    var animal=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee",
        "cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog",
        "giraffe","goat","goldfish","hamster","horse","kangaroo","kitten","lion",
        "lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal",
        "shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra"];
    var country=["Afghanistan","Argentina","Australia","Azerbaijan","Belgium","Brazil","Bulgaria",
        "Canada","China","Colombia","Croatia","Cuba","Cyprus","Czech-Republic","Denmark",,"Egypt",
        "Finland","France","Germany","Greece","India","Iran","Iraq","Ireland","Italy","Jamaica","Japan",
        "Kenya","Luxembourg","Mexico","Netherlands","Nigeria","Norway","Pakistan","Poland","Portugal","Romania",
        "Russia","Spain","Switzerland","Syria","Turkey","Turkmenistan","United-Kingdom","Ukraine"];
    var capital=["Kabul","Buenos-Aires", "Canberra","Baku","Brussels","Brasilia", "Sofia","Ottawa","Beijing","Bogota",
        "Zagreb", "Havana","Nicosia","Prague","Copenhagen","Cairo","Helsinki","Paris", "Berlin","Athens","New-Delhi",
        "Tehran","Baghdad","Rome", "Kingston", "Tokyo","Nairobi","Luxembourg","Mexico-City","Amsterdam","Abuja","Oslo",
        "Islamabad","Warsaw","Lisbon","Bucharest","Moscow","Madrid","Bern","Damascus","Ankara","Ashgabat","Kyiv","Abu-Dhabi","London"];
    let drawArray=[drawOne,drawTwo,drawThree,drawFour,drawFive,drawSix,drawSeven,drawEight];
    let wordGlobal="";
    var lives=0;
    console.log(alphabet[0].toString());
    let scoree=0;
    let guessStr="";
    let guess=new Array();
    let guessWord=new Array();
    var categories=[["Animal",animal],["Country",country],["Capital",capital]];
    categoryName.innerHTML="Please choose a category";
    makeCat();
    function play(){
        var changeCategory = document.getElementById('category');
        if(changeCategory.value==="Select a Category"){
            categoryName.innerHTML="Please choose a category";
            return 0;
        }
        down.style.visibility="hidden";
        up.style.visibility="hidden";
        guessTxt.innerHTML=" ";
        guess=new Array();
        score.innerHTML="Your Score is "+scoree;
        mylives.innerHTML="Let's Start"
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,c.width,c.height);
        let a=document.getElementById('category').options[document.getElementById('category').selectedIndex].index-1;
        var word=categories[a][1][Math.floor(Math.random() * categories[a][1].length)];
        word=word.toUpperCase();
        wordGlobal=word;
        guessWord.length=word.length;
        lives=8;
        console.log(word);
        makeBoxes(word.length);
    }
    function makeCat(){
        var x = document.getElementById("category");
        var option = document.createElement("option");
        option.text = "Select a Category";
        x.add(option);
        for(var i=0; i<categories.length;i++){
            var x = document.getElementById("category");
            var option = document.createElement("option");
            option.text = categories[i][0].toString();
            x.add(option);
        }
    }
    function check() {
        for (var i = 0; i < alphabet.length; i++) {
            let letter=alphabet[i];
            var letterClick=document.getElementById(letter);
            if(letterClick)
                letterClick.addEventListener("click", checking, false);
            function checking() {
                let a=0;
                let x=0;
                letter=letter.toUpperCase();
                if(guess.includes(letter)){
                    guessTxt.innerHTML="Used this letter";
                }else{
                    guessTxt.innerHTML="";
                    guess.push(letter);
                    if(wordGlobal.length==0)
                        return;
                    for (var i = 0; i < wordGlobal.length; i++) {
                        a=i*40;
                        if(wordGlobal.charAt(i)===letter){
                            guessWord[i]=letter;
                            guessStr=guessWord.join("");
                            x=1;
                            var c = document.getElementById("boxCanvas");
                            var ctx = c.getContext("2d");
                            ctx.font = "30px Ubuntu";
                            ctx.fillStyle = "red";
                            ctx.fillText(letter, (a+20 + (10 * i)), 55);
                        }
                    }
                    if (guessStr===wordGlobal) {
                        mylives.innerHTML = "Good job";
                        setTimeout(function(){ alert("Congratulations!"); }, 1100);
                        up.style.visibility="visible";
                        up.animate(t1,1000);
                        up.animate(t2,1000);
                        lives=0;
                        scoree+=1;
                        score.innerHTML="Your Score is "+scoree;
                    }
                    if(x==0) {
                        if(lives==0 || wordGlobal.length==0)
                            return 0;
                        else {
                            drawArray[8 - lives]();
                            lives -= 1;
                            if (lives == 0) {
                                mylives.innerHTML = "Game over";
                                down.style.visibility="visible";
                                down.animate(t1,1000);
                                down.animate(t2,1000);
                                for (var i = 0; i < wordGlobal.length; i++) {
                                    a=i*40;
                                    var c = document.getElementById("boxCanvas");
                                    var ctx = c.getContext("2d");
                                    ctx.clearRect((a+10+ (10 * i)),25,40,40)
                                    ctx.font = "30px Ubuntu";
                                    ctx.fillStyle = "red";
                                    ctx.fillText(wordGlobal.charAt(i), (a+20 + (10 * i)), 55);
                                }
                                scoree-=1;
                                if(scoree==-1)
                                    scoree=0;
                                score.innerHTML="Your Score is "+scoree;
                                setTimeout(function(){ alert("Game over"); }, 1100);
                            } else {
                                mylives.innerHTML = lives + " lives left";
                            }
                        }
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
            list = document.createElement('button');
            alphabet[i]=alphabet[i].toUpperCase();
            list.id = alphabet[i];
            list.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }

    }
    function trying(){
        if(lives==0)
            return
        else {
            if (tryText.value.toUpperCase() === wordGlobal) {
                mylives.innerHTML = "Good job";
                setTimeout(function(){ alert("Congratulations!"); }, 1100);
                up.style.visibility="visible";
                up.animate(t1,1000);
                up.animate(t2,1000);
                lives = 0;
                scoree+=1;
                score.innerHTML="Your Score is "+scoree;
                document.getElementById("tryText").value="";
                changeTxt2();
            }
            else {
                drawArray[8 - lives]();
                lives -= 1;
                if (lives == 0 && wordGlobal.length>0) {
                    mylives.innerHTML = "Game over";
                    down.style.visibility="visible";
                    down.animate(t1,1000);
                    down.animate(t2,1000);
                    for (var i = 0; i < wordGlobal.length; i++) {
                        a=i*40;
                            var c = document.getElementById("boxCanvas");
                            var ctx = c.getContext("2d");
                            ctx.clearRect((a+10+ (10 * i)),25,40,40)
                            ctx.font = "30px Ubuntu";
                            ctx.fillStyle = "red";
                            ctx.fillText(wordGlobal.charAt(i), (a+20 + (10 * i)), 55);
                    }
                    scoree-=1;
                    if(scoree==-1)
                        scoree=0;
                    score.innerHTML="Your Score is "+scoree;
                    setTimeout(function(){ alert("Game over"); }, 1100);
                } else {
                    mylives.innerHTML = lives + " lives left";
                }
            }
        }
    }
    function makeBoxes(x) {
        var c = document.getElementById("boxCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        let a = 0;
        for (let i = 0; i < x; i++) {
            a =i* 40;
            ctx.lineWidth = "3";
            ctx.strokeStyle = "blue";
            ctx.strokeRect((a+10+ (10 * i)), 25, 40, 40);
        }

    }
    function drawOne() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(25, 570);
        ctx.lineWidth = "10";
        ctx.lineTo(125, 570);
        ctx.closePath();
        ctx.stroke();
    }

    function drawTwo() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75, 570);
        ctx.lineWidth = "10";
        ctx.lineTo(75, 30);
        ctx.closePath();
        ctx.stroke();

    }

    function drawThree() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(70, 30);
        ctx.lineWidth = "10";
        ctx.lineTo(250, 30);
        ctx.moveTo(75, 150);
        ctx.lineWidth = "10";
        ctx.lineTo(170, 30);
        ctx.closePath();
        ctx.stroke();

    }

    function drawFour() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(245, 30);
        ctx.lineWidth = "10";
        ctx.lineTo(245, 150);
        ctx.closePath();
        ctx.stroke();

    }

    function drawFive() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(245, 180, 30, 3*Math.PI/2, -Math.PI/2);
        ctx.lineWidth = "10";
        ctx.closePath();
        ctx.stroke();

    }

    function drawSix() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(245, 210);
        ctx.lineWidth = "10";
        ctx.lineTo(245, 350);
        ctx.closePath();
        ctx.stroke();

    }

    function drawSeven() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(245, 250);
        ctx.lineWidth = "10";
        ctx.lineTo(300, 225);
        ctx.moveTo(245, 250);
        ctx.lineWidth = "10";
        ctx.lineTo(190, 225);
        ctx.closePath();
        ctx.stroke();

    }

    function drawEight() {
        var c = document.getElementById("manCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(245, 350);
        ctx.lineWidth = "10";
        ctx.lineTo(300, 400);
        ctx.moveTo(245, 350);
        ctx.lineWidth = "10";
        ctx.lineTo(190, 400);
        ctx.closePath();
        ctx.stroke();

    }
    var body=document.getElementById("body");
    body.addEventListener('keydown', (event) => {
        if(lives==0)
            return;
        let letter=event.key.toString().toUpperCase();
        if(alphabet.includes(letter)) {
            let a = 0;
            let x = 0;
            letter=letter.toUpperCase();
            if(guess.includes(letter)){
                guessTxt.innerHTML="Used this letter";
            }else{
                guessTxt.innerHTML="";
                guess.push(letter);
                for (var i = 0; i < wordGlobal.length; i++) {
                    a=i*40;
                    if(wordGlobal.charAt(i)===letter){
                        guessWord[i]=letter;
                        guessStr=guessWord.join("");
                        x=1;
                        var c = document.getElementById("boxCanvas");
                        var ctx = c.getContext("2d");
                        ctx.font = "30px Ubuntu";
                        ctx.fillStyle = "red";
                        ctx.fillText(letter, (a+20 + (10 * i)), 55);
                    }
                }
                if (guessStr===wordGlobal) {
                    mylives.innerHTML = "Good job"
                    setTimeout(function(){ alert("Congratulations!"); }, 1100);
                    up.style.visibility="visible";
                    up.animate(t1,1000);
                    up.animate(t2,1000);
                    lives=0;
                    scoree+=1;
                    score.innerHTML="Your Score is "+scoree;
                }
                if(x==0) {
                    if(lives==0 && wordGlobal.length>0)
                        return 0;
                    else {
                        drawArray[8 - lives]();
                        lives -= 1;
                        if (lives == 0) {
                            mylives.innerHTML = "Game over";
                            down.style.visibility="visible";
                            down.animate(t1,1000);
                            down.animate(t2,1000);
                            for (var i = 0; i < wordGlobal.length; i++) {
                                a=i*40;
                                var c = document.getElementById("boxCanvas");
                                var ctx = c.getContext("2d");
                                ctx.clearRect((a+10+ (10 * i)),25,40,40)
                                ctx.font = "30px Ubuntu";
                                ctx.fillStyle = "red";
                                ctx.fillText(wordGlobal.charAt(i), (a+20 + (10 * i)), 55);
                            }
                            scoree-=1;
                            if(scoree==-1)
                                scoree=0;
                            score.innerHTML="Your Score is "+scoree;
                            setTimeout(function(){ alert("Game over"); }, 1100);
                        } else {
                            mylives.innerHTML = lives + " lives left";
                        }
                    }
                }
            }
        }
    }, false);
    buttons();
    check();
    var resetClick = document.getElementById("reset");
    if (resetClick)
        resetClick.addEventListener("click", function (){
            if(lives==0)
                play();
        }, false);
    var tryClick = document.getElementById("tryButton");
    if (tryClick)
        tryClick.addEventListener("click", trying, false);
    var playClick = document.getElementById("playButton");
    if (playClick)
        playClick.addEventListener("click", function (){
            if(lives==0)
                play();
        }, false);
    var changeCategory = document.getElementById('category');
    changeCategory.addEventListener('change', function() {
        x=this.value;
        if (x=="Select a Category"){
            categoryName.innerHTML="This is not a category";
            down.style.visibility="hidden";
            up.style.visibility="hidden";
        }else {
            categoryName.innerHTML="Category is: "+x;
            down.style.visibility="hidden";
            up.style.visibility="hidden";
        }

    }, false);

}