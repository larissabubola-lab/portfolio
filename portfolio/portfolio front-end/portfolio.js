const pagina_home = document.getElementById("home");
const pagina_sobre = document.getElementById("sobre_mim");
const pagina_projetos = document.getElementById("projetos");
const pagina_contato = document.getElementById("contato")



function foi_home(){
    pagina_home.style.display = "block";
    pagina_projetos.style.display = "none";
    
    pagina_sobre.style.display = "none";
    pagina_contato.style.display = "none";
    window.scrollTo(0, 0);
}

function foi_sobre(){
    pagina_home.style.display = "none";
    pagina_projetos.style.display = "none";
    pagina_sobre.style.display = "block";
    pagina_contato.style.display = "none";
    window.scrollTo(0, 0);
}

function foi_projetos(){
    pagina_home.style.display = "none";
    pagina_projetos.style.display = "flex";
    pagina_sobre.style.display = "none";
    pagina_contato.style.display = "none";
    window.scrollTo(0, 0);
}

function foi_contato(){
    pagina_home.style.display = "none";
    pagina_projetos.style.display = "none";
    pagina_sobre.style.display = "none";
    pagina_contato.style.display = "block";
    window.scrollTo(0, 0);

}

// const items = document.querySelectorAll("#carrosel .cartas_github");
// const direita = document.getElementById("direita");
// const esquerda = document.getElementById("esquerda");
// let ativo = 0;

// function carrega(){
//     let stt = 0;
//     items[ativo].style.transform = `none`; 
//     items[ativo].style.zIndex = 1;
//     items[ativo].style.filter = `none`;
//     items[ativo].style.opacity = 1;
    
//     for(var i = ativo + 1; i < items.length; i++){
//         stt++;
//         items[i].style.transform = `translateX(${120*stt}px) scale(${1 - (0.2*stt)}) perspective(16px) rotateY(-1deg)`; 
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = `blur(5px)`;
//         items[i].style.opacity = stt>2? 0 : 0.6;
//     }
//     stt = 0;
//     for(var i = ativo - 1; i >= 0; i--){
//         stt++;
//         items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - (0.2*stt)}) perspective(16px) rotateY(1deg)`; 
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = `blur(5px)`;
//         items[i].style.opacity = stt>2? 0 : 0.6;
//     }

// }
// carrega();
// direita.onclick = function(){
//     ativo = ativo + 1< items.length? ativo + 1 : ativo;
//     carrega()    
// }

// esquerda.onclick = function(){
//     ativo = ativo - 1 >= 0? ativo - 1 : ativo;
//     carrega()    
// }

// const items = document.querySelectorAll(".item");
// let index = 0;

// function atualizar() {
// items.forEach((item, i) => {
//     let posicao = (i - index + items.length) % items.length;

//     if (posicao === 0) {
//         item.style.transform = "translateX(0) translateZ(0px) scale(1)";
//         item.style.zIndex = 3;
//         item.style.filter = "blur(0)";
//         item.style.opacity = 1;
//     } 
//     else if (posicao === 1) {
//         item.style.transform = "translateX(250px) translateZ(-120px) rotateY(-30deg) scale(0.8)";
//         item.style.zIndex = 2;
//         item.style.filter = "blur(2px)";
//         item.style.opacity = 0.7;
//     } 
//     else if (posicao === items.length - 1) {
//         item.style.transform = "translateX(-250px) translateZ(-120px) rotateY(30deg) scale(0.8)";
//         item.style.zIndex = 2;
//         item.style.filter = "blur(2px)";
//         item.style.opacity = 0.7;
//     } 
//     else {
//         item.style.transform = "translateX(0) translateZ(-250px) scale(0.5)";
//         item.style.zIndex = 1;
//         item.style.filter = "blur(4px)";
//         item.style.opacity = 0.3;
//     }
// });
// }

// function mover(direcao) {
//     index = (index + direcao + items.length) % items.length;
//     atualizar();
// }

// atualizar();