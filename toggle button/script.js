let btn=document.querySelector(".container");
let spn=document.querySelector(".box");
let light=true;
btn.addEventListener("click",()=>{
    if(light==true){
        document.body.style.backgroundColor='black';
        // btn.style.justifyContent='flex-end'
        spn.setAttribute("class","sh")
        light=false;
        
    }
    else{
        document.body.style.backgroundColor='white';
        // btn.style.justifyContent='flex-start'
        spn.classList.add("gh");
        light=true;
    }
    i++;
})