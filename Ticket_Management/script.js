let allFilters = document.querySelectorAll(".ticket-filters div");
let tiketsContainer = document.querySelector(".tickets-container");
let openModalBtn = document.querySelector(".open-modal");
let closeMOdalBtn = document.querySelector(".close-modal");
let body = document.querySelector("body");

let selectedFilter = "black";

let filterColors = {
    "red" : "#e74c3c",
    "blue" : "#3498db",
    "green" : "#2ecc71",
    "black" : "#34495e",
}

//header filter
for(let i = 0; i < allFilters.length; i++){
    allFilters[i].addEventListener("click", chooseFilter);
}

openModalBtn.addEventListener("click", handleOpenModal);
closeMOdalBtn.addEventListener("click",closeModal);

function handleOpenModal(){
    if(document.querySelector(".modal")){

    }else{
        let modalDiv = document.createElement("div");
        modalDiv.classList.add("modal");
        modalDiv.innerHTML =      `<div class="modal-textbox" contenteditable = "true" data-typed = "false">Write Here...</div>
                                    <div class="modal-filter-options">
                                        <div class="modal-filter red"></div>
                                        <div class="modal-filter blue"></div>
                                        <div class="modal-filter green"></div>
                                        <div class="modal-filter black active-filter"></div>
                                    </div>`;
              
        body.append(modalDiv);
        
        let modalText = modalDiv.querySelector(".modal-textbox");
        modalText.addEventListener("click", clearModalTextBox);
        modalText.addEventListener("keypress",addTicket)
        selectedFilter = "black";
        
        
        let allModalFilters = modalDiv.querySelectorAll(".modal-filter");
        // console.log(allModalFilters)
        for(let i = 0; i < allModalFilters.length; ++i){
            allModalFilters[i].addEventListener("click", chooseModalFilter);
        }
    }    
}






function chooseFilter(e){
    let filter = e.target.classList[1];
    let filterCode;
    filterCode = filterColors[filter];    
    tiketsContainer.style.background = filterCode;        
}


function clearModalTextBox(e){  
    if (e.target.getAttribute("data-typed") == "true") {
        return;
      }
      e.target.innerHTML = "";
      e.target.setAttribute("data-typed", "true");
}


function closeModal(){
    if(document.querySelector(".modal")){
        document.querySelector(".modal").remove()  ;
    }
}

function addTicket(e){
    if(e.code == "Enter"){        
        let modalMssg = document.querySelector(".modal-textbox").innerHTML;
        let ticket = document.createElement("div");
        ticket.classList.add("ticket");
        ticket.innerHTML = `<div class="ticket-filter ${selectedFilter}"></div>
                            <div class="ticket-id">#${uid()}</div>
                            <div class="ticket-content">${modalMssg}</div>`
        tiketsContainer.append(ticket);
        closeModal();
    }
}


function chooseModalFilter(e){
    // console.log(e);
    let selectedModalFilter = e.target.classList[1];
    if(selectedModalFilter == selectedFilter){
        return;
    }else{
        selectedFilter = selectedModalFilter;
        document.querySelector(".active-filter").classList.remove("active-filter");
        e.target.classList.add("active-filter")
    }
}