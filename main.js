const pagina1=document.getElementById("pagina1");
const preguntas=document.getElementById("preguntas");
const caja=document.getElementById("boxs");
const resultado=document.getElementById("resultado");
const orientacion=document.getElementById("orientacion");
const testimonios=document.getElementById("testimonios");
const directorio=document.getElementById("directorio");
const cem=document.getElementById("cem");
const resultado=document.getElementById("resultado");
document.getElementById("btntest1").addEventListener("click",()=>{
    pagina1.style.display="none";
    caja.style.display="none";
    resultado.style.display="none";
    preguntas.style.display="block";
});
document.getElementById("btntesti").addEventListener("click",()=>{
    pagina1.style.display="none";
    orientacion.style.display="none";
    directorio.style.display="none";
    testimonios.style.display="block";
})
document.getElementById("btnori").addEventListener("click",()=>{
    pagina1.style.display="none";
    orientacion.style.display="none";
    directorio.style.display="none";
    testimonios.style.display="none";
    cem.style.display="block";
})


