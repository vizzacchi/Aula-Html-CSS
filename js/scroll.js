window.addEventListener('scroll',()=>{
    // pegando o menu do html e passando para o js
    const header= document.querySelector(".header__top");
    // no header iremos adicionar uma classe CSS quando o scroll maior que 80
    // scrool >= 80 colocaca CSS <= 80 tira CSS
    header.classList.toggle('scroll__active',window.scrollY > 80);
})