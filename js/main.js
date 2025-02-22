// le bouton plus : 
const plus = Array.from(document.getElementsByClassName("fa-plus-circle")
)
const qte = Array.from(document.querySelectorAll('quantity'));
// le bouton moin: 
const moins = Array.from(document.querySelectorAll(".fa-minus-circle"))
// la poubelle : 
const poubelles = Array.from(document.getElementsByClassName('fa-trash-alt'));
const cards = Array.from(document.getElementsByClassName('card'));
// coeur  : 
const coeur= Array.from(document.querySelectorAll('.fa-heart'));
//

//***********************************************/
for (const ajouter of plus ){
    ajouter.addEventListener('click',function() {
    ajouter.nextElementSibling.innerHTML++
    prixtotal()
        

    })
}
/******************************************************/
for (const desc of moins ){
    desc.addEventListener('click',function() {
        if(desc.previousElementSibling.innerHTML > 0)
            desc.previousElementSibling.innerHTML-- 
        prixtotal()

    })
}
/*********************************************/
for( const i in poubelles) {
    poubelles[i].addEventListener('click',function() {
      cards[i].remove();
      prixtotal()

    })
}
/*********************************************************************/
for ( const i in coeur){
    coeur[i].addEventListener('click',function(){
        if(coeur[i].style.color === "red"){
            coeur[i].style.color = "black"
        } else coeur[i].style.color ="red"
    })
}
/***************************/
function prixtotal(){
    const prix = Array.from(document.querySelectorAll(".unit-price"))
    const quantite = Array.from(document.querySelectorAll(".quantity"))
    var total = 0;
    for (const i in prix){
        total=prix[i].innerHTML * quantite [i].innerHTML;
    }
    document.querySelector(".total").innerText = total;
}
