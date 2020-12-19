var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var arra_size=document.getElementById('size_array');
var arra_speed=document.getElementById('speed_array');


var butts_algos=document.querySelectorAll(".algos button");

var div_sizes1=[];
var div_sizes2=[];
var divs1=[];
var divs2=[];
var margin_size;
var cont1=document.getElementById("array_container1");
var cont2=document.getElementById("array_container2");
cont1.style="flex-direction:row";
cont2.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array1);
inp_gen.addEventListener("click",generate_array2);
inp_as.addEventListener("input",update_array_size);


function generate_array1()
{
    cont1.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes1[i]=Math.floor(Math.random() * 0.5*(150 - inp_as.min) ) + 10;
        divs1[i]=document.createElement("div1");
        cont1.appendChild(divs1[i]);
        margin_size=0.1;
        divs1[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes1[i]) + "%;";
    }
}

function generate_array2()
{
    cont2.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes2[i]=Math.floor(Math.random() * 0.5*(150 - inp_as.min) ) + 10;
        divs2[i]=document.createElement("div2");
        cont2.appendChild(divs2[i]);
        margin_size=0.1;
        divs2[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes2[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    arra_size.innerHTML = array_size;
    generate_array1();
    generate_array2();
}

window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}
function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}


function runalgo()
{
    disable_buttons();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Sort Now!":
                        Selection_sort();
                        Quick();
                        break;
    }

}