

function abc()

 {
    let a = +document.getElementById("Numbers_1").value;
    let b = +document.getElementById("Numbers_2").value;
    let operator = document.getElementById("sel").value;

    switch (operator) {
        case '+' : let e=a+b;
            document.getElementById("kq").value=e;
        break;
        case '-': let f=a-b;
            document.getElementById("kq").value = f;
        break;
        case '*': let g=a*b;
            document.getElementById("kq").value=g;
        break;
        case '/':  let h=a/b;
            document.getElementById("kq").value= h;


    }
}
function reuse() {
    let a = document.getElementById("kq").value;
    document.getElementById("Numbers_1").value =a;
    document.getElementById('kq').value = "";
    document.getElementById("Numbers_2").value='';
   document.getElementById("Numbers_2").focus();

}
