
const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const addPopupBtn = document.querySelector("#add-popup-btn");

addPopupBtn.addEventListener("click",function(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
})

const cancelButton = document.querySelector("#cancel-popup");

cancelButton.addEventListener("click",function (event){
    event.preventDefault();
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

const container = document.querySelector(".container");
const addMessage = document.querySelector('#add-popup');
const nameInput = document.querySelector('#name-input');
const fromInput = document.querySelector('#from-input');
const jobInput = document.querySelector('#job-input');
const textAreaInput = document.querySelector('#message-discription-input');


addMessage.addEventListener('click', (event) =>{
    if(!nameInput.value || !fromInput.value || !jobInput.value || !textAreaInput.value){
        alert("please enter the details");
        return;
        
    }
    event.preventDefault();
    const div = document.createElement('div');
    div.setAttribute("class","msg-container");
    div.innerHTML=
    `     <h2> ${nameInput.value}</h2>
    <h3>${fromInput.value}</h3>
     <h4> ${(jobInput.value)}</h4>
     <p style="word-wrap: break-word;">${textAreaInput.value}</p>
     <button onclick="deleteBtn(event)">Delete</button>`
          container.append(div)
          popupOverlay.style.display="none"
          popupBox.style.display="none"

        
})

function deleteBtn (event) {
    event.target.parentElement.remove();
}
