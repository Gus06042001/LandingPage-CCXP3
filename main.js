const ingressos = []
function addRedBorder(id){
    element=document.querySelector(`#${id}`);
    element.style.border = "5px solid red";
}

function cardIngressoHover(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-ingresso:hover");

}
function checkKeyboadCode(){
    document.addEventListener(
        "keydown",
        (event)=>{
            var name = event.key;
            var code = event.code;
            //Alert the key name and key code on keydown
            alert(`key pressed ${name}\r\n Key code value: ${code}`);
        },
        false
    )
}

function addKeyboardEventListeners()
{
    document.addEventListener("keydown",
     (event)=>{
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");     
        
        var code = event.code;
        if(code == "Digit1"){
            ingresso1.classList.toggle("card-ingresso:hover");
            ingresso2.classList.remove("card-ingresso:hover");
            ingresso3.classList.remove("card-ingresso:hover");
            ingresso4.classList.remove("card-ingresso:hover");
        }
        if(code == "Digit2"){
            ingresso1.classList.remove("card-ingresso:hover");
            ingresso2.classList.toggle("card-ingresso:hover");
            ingresso3.classList.remove("card-ingresso:hover");
            ingresso4.classList.remove("card-ingresso:hover");
        }
        if(code == "Digit3"){
            ingresso1.classList.remove("card-ingresso:hover");
            ingresso2.classList.remove("card-ingresso:hover");
            ingresso3.classList.toggle("card-ingresso:hover");
            ingresso4.classList.remove("card-ingresso:hover");
        }
        if(code == "Digit4"){
            ingresso1.classList.remove("card-ingresso:hover");
            ingresso2.classList.remove("card-ingresso:hover");
            ingresso3.classList.remove("card-ingresso:hover");
            ingresso4.classList.toggle("card-ingresso:hover");
        }
    },false);
}


selectCard=(selector)=>{
    var element = document. querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector))ingressos.pop(selector);
    else ingressos.push(selector)
}
function showSelectedCards()
{
    if(ingressos.length > 0) alert ("Ingressos Selecionados:"+ingressos);
}
addKeyboardEventListeners();