import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall } from "./dom/teclado.js";
import { countdown } from "./dom/cuenta-regresiva.js"
import scrollTopButton from "./dom/boton-scroll.js";
import darkTheme from "./dom/tema-oscuro.js";


const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma"),
    countdown("countdown", "May 23, 2022", "Feliz cumpleee"),
    scrollTopButton(".scroll-top-btn");
})

d.addEventListener('keydown',(e)=>{
    moveBall(e,".ball",".stage")
})


darkTheme(".dark-theme-btn", "dark-mode")