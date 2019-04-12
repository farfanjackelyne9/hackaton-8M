const preguntas=document.getElementById("preguntas");
const boxs=document.getElementById("boxs");
const pagina1=document.getElementById("pagina1");
const testimonios=document.getElementById("testimonios");
const cem=document.getElementById("cem");
document.getElementById("btntest1").addEventListener("click",()=>{
   pagina1.style.display="none";
   boxs.style.display="none";
   preguntas.style.display="block"; 
})
document.getElementById("btntesti").addEventListener("click",()=>{
    pagina1.style.display="none";
    boxs.style.display="none";
    testimonios.style.display="block";
})
document.getElementById("btnori").addEventListener("click",()=>{
    pagina1.style.display="none";
    boxs.style.display="none";
    cem.style.display="block";
})



