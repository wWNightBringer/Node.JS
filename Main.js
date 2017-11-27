
var value=[]; // array for value cards
var tileId=[]; // array for id cards
var tileFlipped=0;
var tens=0; // variable milliseconds
var seconds=0;// variable seconds
var appendSecond=document.getElementById("second");
var appendTens=document.getElementById("ten");
var pause=document.getElementById("pause");
var text=document.getElementById("memory-body");
var score=document.getElementById("score");
var start=document.getElementById("click");
var store=0;// variable result
var account=0;// counter for different result
var amountTrying=0;
var array=[]; //array for cards
var b=0;
var size=0;// variable to size field
var d=0;
var colorSelect=0; //select color
var con=true;
function choose() {//This function is needed to select the size of the field and the background color.

        var x=document.getElementsByName("size");
        for(var i=0;i<x.length;i++){
            if(x[i].checked){
                d=x[i].value;
                size=Math.pow(x[i].value,2);
            }
        }
        for(var j=0;j<4;j++){
            if(j<=4/2-1){

                    b=j;
                    array[j]=j;

            }else
                array[j]=b--;
        }

       var color=document.getElementsByName("color");
    for(var c=0;c<color.length;c++){
     if(color[c].value=="yellow" && color[c].checked){
         colorSelect=document.getElementById("memory-body").style.background="yellow";
     }
        if(color[c].value=="pink" && color[c].checked){
            colorSelect=document.getElementById("memory-body").style.background="pink";
        }
        if(color[c].value=="darkBlue" && color[c].checked){
           colorSelect= document.getElementById("memory-body").style.background="darkBlue";
        }
    }
    }
var con;
Array.prototype.shuffel=function () {// here cards are shuffled.

    var i=this.length,j,temp;
    while(i-->0){
        j=Math.floor(Math.random()*(i+1));
        temp=this[j]; //swap
        this[j]=this[i];
        this[i]=temp;
    }
};
var Interval;
function timer() {// function to activate the timer
con=true;
       Interval=setInterval(function () {
         var continued=document.getElementById("continue");
        tens++;
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSecond.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            appendSecond.innerHTML = seconds;
        }
        pause.onclick=function () {
            con=false;
            setTimeout(function () {
                con=false;
                clearInterval(Interval);

            },1);
            continued.style.animation="blinking .5s infinity";
        }
    },10);

}

    start.onclick = function create() {//start the game
array=[];
        choose();
        if(d && colorSelect) {
            store=0;
            account=0;
            score.innerHTML = "0" + 0;
        appendTens.innerHTML = "0" + 0;// reset the timer
        appendSecond.innerHTML = "0" + 0;
            tileFlipped=0;
        clearInterval(Interval);


        tens = 0;
        seconds = 0;
        tileFlipped = 0;
        var output = '';
        array.shuffel();
        text.innerHTML = '';
        timer();
        var a=0;
        var func = document.getElementById("func");
            text.style.width='auto';
        for (var i = 0; i < 2; i++) {
            var tr=document.createElement("tr");

            for(var j=0;j<2;j++){
                var td=document.createElement("td");

                var div = document.createElement("div");// creation of cards
                div.id = a;
                div.dataset.item = array[a];
                div.dataset.view = "div";
                td.appendChild(div);
                tr.appendChild(td);
                a++;
                div.onclick = function () {// cards flip
let numCard;
                    var result = this.dataset.item;
                    numCard=result;
                    if (this.innerHTML === '' && value.length < 2) {
                        amountTrying++;


                        if(con==true){
                            if (value.length == 0) {//adding an element to the array and its id
                                value.push(result);
                                tileId.push(this.id);
                                let tile1=document.getElementById(tileId[0]);
                                let flip=setInterval(function () {
                                    tile1.style.transform="scaleX(0.001)";
                                },3);
                                setTimeout(function () {
                                    clearInterval(flip);
                                    tile1.style.backgroundImage = "url('PhotoInDiv/"+numCard+".jpg')";
                                    tile1.style.backgroundSize='100%';
                                    tile1.style.color='red';
                                    tile1.style.transform="scaleX(1)";
                                    tile1.style.transition="transform .5s";
                                    tile1.innerHTML = result;
                                },700);
                            } else if (value.length == 1) {//adding an element to the array and its id
                                value.push(result);
                                tileId.push(this.id);
                                let tile2=document.getElementById(tileId[1]);
                                let flip=setInterval(function () {
                                    tile2.style.transform="scaleX(0.001)";

                                },10);
                                setTimeout(function () {
                                    clearInterval(flip);
                                    tile2.style.backgroundSize='100%';
                                    tile2.style.color='red';
                                    tile2.style.backgroundImage = "url('PhotoInDiv/"+numCard+".jpg')";
                                    tile2.style.transform="scaleX(1)";
                                    tile2.style.transition="transform .5s";
                                    tile2.innerHTML = result;
                                },700);
                                if (value[0] == value[1]) {//comparison of the first and second elements


                                    var tile3 = document.getElementById(tileId[0]);
                                    var tile4 = document.getElementById(tileId[1]);
                                    setTimeout(function () {


                                        tile3.style.display='none';
                                        tile4.style.display='none';

                                    },1000);


                                    tileFlipped += 2;//check both arrays
                                    if (seconds < 200 && amountTrying < 50) {// set of glasses
                                        account = account + 5;
                                    } else {
                                        account = account + 2;
                                    }

                                    store += account;
                                    if (store < 9) {
                                        score.innerHTML = "0" + store;
                                    }
                                    if (store > 9) {
                                        score.innerHTML = store;
                                    }

                                    value = [];
                                    tileId = [];

                                    if (tileFlipped == array.length) {
                                        document.getElementById("memory-body").innerHTML = '';
                                        win();//win result

                                    }
                                } else {
                                    function FlipBack() {//function for return if the cards are different
                                        account = 0;
                                        let tile1 = document.getElementById(tileId[0]);
                                        let tile2 = document.getElementById(tileId[1]);
                                        setTimeout(function () {
                                            tile1.style.backgroundImage = 'url("pr-kv50-3.jpg") ';
                                            tile1.style.BackgroundSize = '100%';
                                            tile1.innerHTML = '';
                                            tile2.style.backgroundImage = 'url("pr-kv50-3.jpg")';
                                            tile2.style.BackgroundSize = '100%';
                                            tile2.innerHTML = '';
                                        },700);


                                        //clear arrays
                                        value = [];
                                        tileId = [];
                                    }

                                    setTimeout(FlipBack, 700);
                                }
                            }
                        }

                    }
                }
            }
            text.appendChild(tr);
        }


    }else{
            alert("Select size and background color");
        }
}

var date=new Date();
 function win() {//payoff function
     var nick=document.getElementById("nick1");

    setTimeout(function () {
        clearInterval(Interval);
        text.style.background="red";
        text.style.color="#FFF";
        text.style.fontSize=34;
        text.style.fontFamily='Georgia';
        show();
        text.innerHTML = "Your time was " + seconds + ":" + tens+" and your score "+store+"\n"+", drop down to enter the name";


        var result=[];


var buttonSend=document.getElementById("buttonSend");
var mainNick=document.getElementById("nick");
var e=1;
var border=document.getElementById("table");
var body=document.getElementById("body");
        var table=document.getElementById("border");
        var caption=document.createElement("caption");
        table.appendChild(caption);
        mainNick.style.display='inline';
        buttonSend.style.display='inline';
buttonSend.onclick=function () {//button send data to localStorage
    var keys;
    var serial=JSON.stringify(nick);
    keys=store+" "+seconds+" "+tens+" "+nick.value;
    if(nick.value){
        result=date.getHours()+" "+date.getMinutes()+" "+date.getDate()+" "+date.getMonth()+" "+date.getFullYear()+" "+d;
        localStorage.setItem(keys,result);
        mainNick.style.display='none';
        buttonSend.style.display='none';
        var x=0;
border.style.display='inline';
Object.keys(localStorage).sort(function (a,b) {
    return a-b;
}).forEach(function (t) {
    var obj=t.split(' ');
    var valueLocal=localStorage[t].split(' ');
    var tr = document.createElement("tr");
    var tdNum = document.createElement("td");
    var tdNick = document.createElement("td");
    var tdResult = document.createElement("td");
    var tdTime = document.createElement("td");
    var tdDate = document.createElement("td");
    var tdField = document.createElement("td");
    if(parseInt(valueLocal[5])==6) {//field 6х6
        caption.innerHTML = "Table 6x6";
        tdNum.innerHTML = e;
        tdNick.innerHTML = obj[3];
        tdResult.innerHTML = obj[0];
        tdTime.innerHTML = obj[1] + ':' + obj[2];
        tdDate.innerHTML = valueLocal[0] + ":" + valueLocal[1] + " " + valueLocal[2] + "." + valueLocal[3] + "." + valueLocal[4];
        tdField.innerHTML = valueLocal[5] + "x" + valueLocal[5];
        tr.appendChild(tdNum);
        tr.appendChild(tdNick);
        tr.appendChild(tdResult);
        tr.appendChild(tdTime);
        tr.appendChild(tdDate);
        tr.appendChild(tdField);
        table.appendChild(tr);
        e++;
    }
if(parseInt(valueLocal[5])==8){  //field 8х8
    caption.innerHTML="Table 8x8";
    tdNum.innerHTML=e;
    tdNick.innerHTML = obj[3];
    tdResult.innerHTML = obj[0];
    tdTime.innerHTML = obj[1] + ':' + obj[2];
    tdDate.innerHTML=valueLocal[0]+":"+valueLocal[1]+" "+valueLocal[2]+"."+valueLocal[3]+"."+valueLocal[4];
    tdField.innerHTML=valueLocal[5]+"x"+valueLocal[5];
    tr.appendChild(tdNum);
    tr.appendChild(tdNick);
    tr.appendChild(tdResult);
    tr.appendChild(tdTime);
    tr.appendChild(tdDate);
    tr.appendChild(tdField);
    table.appendChild(tr);
    e++;
}
    if(parseInt(valueLocal[5])==10){ //field 10х10
        caption.innerHTML="Table 10x10";

        tdNum.innerHTML=e;
        tdNick.innerHTML = obj[3];
        tdResult.innerHTML = obj[0];
        tdTime.innerHTML = obj[1] + ':' + obj[2];
        tdDate.innerHTML=valueLocal[0]+":"+valueLocal[1]+" "+valueLocal[2]+"."+valueLocal[3]+"."+valueLocal[4];
        tdField.innerHTML=valueLocal[5]+"x"+valueLocal[5];
        tr.appendChild(tdNum);
        tr.appendChild(tdNick);
        tr.appendChild(tdResult);
        tr.appendChild(tdTime);
        tr.appendChild(tdDate);
        tr.appendChild(tdField);
        table.appendChild(tr);
        e++;
    }
    if(parseInt(valueLocal[5])==12){ //field 12х12
        caption.innerHTML="Table 12x12";
        tdNum.innerHTML=e;
        tdNick.innerHTML = obj[3];
        tdResult.innerHTML = obj[0];
        tdTime.innerHTML = obj[1] + ':' + obj[2];
        tdDate.innerHTML=valueLocal[0]+":"+valueLocal[1]+" "+valueLocal[2]+"."+valueLocal[3]+"."+valueLocal[4];
        tdField.innerHTML=valueLocal[5]+"x"+valueLocal[5];
        tr.appendChild(tdNum);
        tr.appendChild(tdNick);
        tr.appendChild(tdResult);
        tr.appendChild(tdTime);
        tr.appendChild(tdDate);
        tr.appendChild(tdField);
        table.appendChild(tr);
        e++;
    }
});

    }else{
        alert("Enter nick");
    }


};

setTimeout(function () {
    border.style.display='none';
},5000);

        appendTens.innerHTML="0"+0;
        appendSecond.innerHTML="0"+0;
    },10);


}
function show() {//display fields for nickname and comments
    var field=document.getElementById("field");
    field.style.display='inline';

}
function reverse() {//Restart game
document.getElementById("memory-body").innerHTML=' ';
setTimeout(function () {

    clearInterval(Interval);
    score.innerHTML="0"+0;
    appendTens.innerHTML="0"+0;
    appendSecond.innerHTML="0"+0;

},10);
}

