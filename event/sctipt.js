let div=document.querySelector("div");

// div.onmousemove=(event)=>{
//     console.log(event.clientX);
//     console.log(event.clientY);
//     let spn=document.querySelector("span");
//     spn.setAttribute("class","po");
//     spn.style.top=event.clientY+'px';
//     spn.style.left=event.clientX+'px';
// }

div.addEventListener("mousemove" ,(event)=>{
    console.log(event.clientX);
    console.log(event.clientY);
    let spn=document.querySelector("span");
    spn.setAttribute("class","po");
    spn.style.top=event.clientY+'px';
    spn.style.left=event.clientX+'px';
})
let i=0;
div.addEventListener("click" ,(event)=>{
    console.log(event.clientX);
    console.log(event.clientY);
    let spn=document.querySelector("span");
    spn.style.fontSize=`${1.1+i}em`;
    i++;
    if(i==10){
        spn.remove();
    }
})

// div.removeEventListener("click",()=>{

// })

let a=document.querySelector(":root");