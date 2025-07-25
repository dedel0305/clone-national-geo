/* navegação por tabs:
quando temos um intem ou objeto se relacionando com outro,
 fazendo conexão com os conteudos

 obs: o conteudo tem que esta organizado na mesma ordem 
  */
export default function inittab(){
     const tabAnimais = document.querySelectorAll("[data-tab='animais'] li");
     const tabDescription = document.querySelectorAll("[data-tab='description'] section");
     tabAnimais.forEach((itemLi, indice)=>{
        itemLi.addEventListener('click', ()=>{
            ativarTab(indice);

        })
    }) 
   
    function ativarTab(indice){
        tabDescription.forEach((itemSection)=>{
            itemSection.classList.remove("ativo");
        })
        const animation = tabDescription[indice].dataset.anima;
        tabDescription[indice].classList.add("ativo", animation);
    }
   tabDescription[0].classList.add("ativo")
    
}