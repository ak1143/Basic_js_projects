
let input=document.querySelector('#box');
let button=document.querySelector('button');
let ul=document.querySelector('.Task');

function add(){
    if(input.value=='')
    {
        alert("you must write something!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        ul.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML='\u00d7'; 
        li.appendChild(span);       
    }
    input.value="";
    save();
}

button.addEventListener('click',add);

ul.addEventListener('click',function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        save();
    }else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",ul.innerHTML);
}

function show(){
    ul.innerHTML=localStorage.getItem("data");
}

show();