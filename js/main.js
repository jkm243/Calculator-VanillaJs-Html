// var buttons = {
//     btn_1 : 1,
//     btn_2 : 2,
//     btn_3 : 3,
//     btn_4 : 4,
//     btn_5 : 5,
//     btn_6 : 6,
//     btn_7 : 7,
//     btn_8 : 8,
//     btn_9 : 9,
//     btn_0 : 0,
//     plus : '+',
//      : '-',
//     mod : '%',
//     power : true,
//     cos : 'cos',
//     sin : 'sin' 
// };
var tchfx= {
    plus : document.getElementById('plus'),
    minus : document.getElementById('minus'),
    mult : document.getElementById('mult'),
    equal : document.getElementById('equal'),
    mod : document.getElementById('mod'),
    clean :document.getElementById('power'),
    cos : document.getElementById('cos'),
    sin : document.getElementById('sin'),
    point : document.getElementById('point'),
    neg : document.getElementById('neg')
}
var on= false;
var zero = document.getElementById('0')
    un = document.getElementById('1'),
    deux = document.getElementById('2'),
    trois = document.getElementById('3'),
    quatre = document.getElementById('4'),
    cinq = document.getElementById('5'),
    six = document.getElementById('6'),
    sept = document.getElementById('7'),
    huit = document.getElementById('8'),
    neuf = document.getElementById('9');

var ecran = document.getElementById('ecran');
var prem, deux, fonction;
var result = 0;
var full = false
// Power button
    tchfx.clean.onclick =  function(){
        if (ecran.innerHTML == '' || ecran.innerHTML == 'Powered OFF'){
            ecran.innerHTML='';
            on= true
        } else if (ecran.innerHTML != '') {
            ecran.innerHTML='';
            prem = 0;
            deux = 0;
            fonction = '';
        } 
    };

    //Touches Numériques
    zero.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
    un.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
       (on());
    };
    deux.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     trois.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     quatre.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     cinq.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     six.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     sept.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     huit.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };
     neuf.onclick =  function(){
        ecran.innerHTML = ecran.innerHTML + this.id;
        (on());
     };

    //Touches de fonctions
     tchfx.cos.onclick =  function(){
        ecran.innerHTML= "cos";
        (on());
     };
     tchfx.sin.onclick =  function(){
        ecran.innerHTML= "sin";
        (on());
     };
     tchfx.point.onclick =  function(){
        ecran.innerHTML= ecran.innerHTML + ",";
        (on());
     };
     tchfx.neg.onclick = function(){
        prem = parseFloat(ecran.innerHTML);
        ecran.innerHTML = prem * -1;
         
     }
     
    //Les touches de calcul
     tchfx.plus.onclick = function(){
        prem = parseFloat(ecran.innerHTML);
        fonction = '+'
        ecran.innerHTML = ''; 
    };
     tchfx.minus.onclick = function(){
        prem = parseFloat(ecran.innerHTML);
        fonction = '-'
        ecran.innerHTML = ''; 
    };
    tchfx.mult.onclick = function(){
        prem = parseFloat(ecran.innerHTML);
        fonction = '*'
        ecran.innerHTML = ''; 
    };
    tchfx.cos.onclick = function(){
        result = Math.cos(prem);
        ecran.innerHTML = result;
    }
    tchfx.equal.onclick = function(){
        deux = parseFloat(ecran.innerHTML);
        if (fonction == '+'){
            result = prem + deux;
        }else if(fonction == '-'){
            result = prem - deux;
        }else if (fonction == '*'){
            result =  prem * deux;
        }else if (fonction == '/'){
            result = prem / deux;
        }
        ecran.innerHTML = result; 
        full = true
    };
 function vidange(){
     if (full){
        ecran.innerHTML = '' + this.id;  
    }; 
};

 