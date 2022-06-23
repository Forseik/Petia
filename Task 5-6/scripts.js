function Greet(){
    let name = document.getElementsByTagName("input")[0].value;
    alert("Hello, " + name);
}

function FindSquare(){
    let height = Number(document.getElementsByTagName("input")[2].value);
    let side = Number(document.getElementsByTagName("input")[3].value);

    alert(0.5 * height * side);
}

function CompareStrings(){
    let string1 = document.getElementsByTagName("input")[5].value;
    let string2 = document.getElementsByTagName("input")[6].value;

    if (string1.length != string2.length)
        alert("Строки не равны");
    else 
        alert("Строки равны");
}

function MinMax(){
    let input = document.getElementsByTagName("input")[8].value;
    let array = new Array();

    for (let i = 0;i<input.length;i++){
        array.push(input[i]);
    }

    let min = array[0];
    let max = array[0];

    for (let i = 0;i<array.length;i++){
        if (min > array[i])
            min = array[i];
        if (max < array[i])
            max = array[i];
    }

    alert("Максимальное значение - " + max + " , минимальное значение - " + min);
}

function GetTestResults(){
    let results = 0;

    if (document.getElementsByTagName("input")[10].value.toLowerCase == "javascript")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "let")
        results++;    
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "string")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "да")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "фронт-энд")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "if")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "10")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "нет")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "да")
        results++;
    if (document.getElementsByTagName("input")[10].value.toLowerCase == "javascript")
        results++;

    if (results >= 5)
        alert("Вы хорошо справились с тестом");
    if (results < 5)
        alert("Тест не пройден");
}

function DoAnotherMagic(){
    let div = document.getElementById("div2");
    div.style.display = "block";
    div.style.height = "100%";
    div.style.width = "100%";
    div.style.margin = "-10px";
    div.style.position = "absolute";
    document.getElementById("div1").style.display = "none";
    let name = document.createElement('h1');
    name.style.alignItems = "center";
    name.innerText = document.getElementsByTagName("input")[0].value;
    
    name.innerHTML = document.getElementsByTagName("input")[0].value;
    div.style.background = "linear-gradient(45deg, #d4360f, #6b0999)";
    div.appendChild(name);
    let time = document.createElement('h2');
    let date = new Date();
    time.innerHTML = date.getFullYear() + " " + String(date.getMonth()).padStart(2,'0') + " " + String(date.getDay()).padStart(2,'0');
    div.appendChild(time);

    div.addEventListener('click', event =>{
        div.style.display = "none";
        document.getElementById("div1").style.display = "block";
        div.remove(name);
        div.remove(time);
    });
    
}