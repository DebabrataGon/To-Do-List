const submit=document.getElementById("submit");
const input=document.getElementById("Input");
const display=document.querySelector(".display");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value.length!=0)
    {
        var displayChild=document.createElement("div");
        var text=document.createElement("div");
        var done=document.createElement("button");
        var remove=document.createElement("button");
        displayChild.classList.add('displayChild')
        text.classList.add('text');
        done.classList.add('actionButton');
        remove.classList.add('actionButton');
        text.innerHTML=input.value;
        done.innerHTML='DONE';
        remove.innerHTML='REMOVE';
        //done.addEventListener("click",()=>{text.innerHTML='<s>${text.innerHTML}</s>';});
        done.addEventListener("click",()=>{text.innerHTML=`<s>${text.innerHTML}</s>`; displayChild.style.backgroundColor='rgb(195, 255, 193)'});
        remove.addEventListener("click",()=>{display.removeChild(displayChild)});
        displayChild.appendChild(text);
        displayChild.appendChild(done);
        displayChild.appendChild(remove);
        display.appendChild(displayChild);
    }
});
