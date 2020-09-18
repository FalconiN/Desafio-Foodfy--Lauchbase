const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    card.addEventListener("click", () => {
        const imageid = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/styles/assets/${imageid}`
        
        modalOverlay.querySelector("h3").innerHTML = card.querySelector("h3").textContent;
        modalOverlay.querySelector("p").innerHTML = card.querySelector("p").textContent;

        
    })
}

document.querySelector('.close-modal').addEventListener("click", ()=>{
    modalOverlay.classList.remove('active')
})

