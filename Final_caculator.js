
function Display(value)
    {
        document.getElementById('display').value += value;
    }

function eval_1()
    {
    let tinhtoan=document.getElementById('display').value;

    result = eval(tinhtoan);

    document.getElementById('display').value = result;
    }

function clear_1()
    {
    let del = document.getElementById('display').value;
    result = del.substring(0,del.length -1);
    document.getElementById('display').value =  result;
    }