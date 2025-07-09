/* 
    accordion list :  é um lista de items empilhada verticalmente , ao ser clicada ela revela ou oculta  um conteudo associada  a cada elemento dessa lista .

    #usa-se elemento de click em cada item que vai ser relacionada  ao seu conteudo
*/  
export default function initAccordion(){
    const accordionList = document.querySelectorAll("[data-accordion] dt");
   accordionList.forEach(itemDt =>{
    itemDt.addEventListener("mousemove", ()=>itemDt.style.cursor = "pointer")
    itemDt.addEventListener("click", accordion);
   })

   function accordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
        /* metodo nextElementSibling: retorna o conteudo html do proximo  */
   }
    accordionList[0].classList.toggle('ativo')
    accordionList [0].nextElementSibling.classList.toggle('ativo')
}

