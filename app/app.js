const d = document;
const notifications = d.querySelectorAll(".notifications");
const numNotif = d.querySelector("#number-notifications")
const readBtn = d.querySelector("#read-notifications");
const messageContainer = d.querySelector(".message-container");
let newNotificactions = 0;

d.addEventListener("DOMContentLoaded", (e) => {
    notifications.forEach(noti => {
        if(noti.childNodes[3]) {       
            newNotificactions++;    
            noti.classList.remove("new");
            messageContainer.classList.add("new");
        }
        if(noti.classList.contains("new")) {
            newNotificactions++;
            numNotif.textContent = newNotificactions;
        }
    })
})

readBtn.addEventListener("click", (e) => {
    if(e.target === readBtn) {
        notifications.forEach(noti => {
            noti.classList.remove("new");
            if(noti.childNodes[3]) {
                noti.childNodes[3].classList.remove("new");
            }
        })
    }
    countNotifications();
});

function countNotifications() {
    newNotificactions = 0;
    notifications.forEach(noti => {
        if(noti.childNodes[3]) {
            if(noti.childNodes[3].classList.contains("new")) {
            newNotificactions++;
        }
        }
        if(noti.classList.contains("new")) {
            newNotificactions++;
            numNotif.textContent = newNotificactions;
        } 
        if(!noti.classList.contains("new")) {
            numNotif.textContent = newNotificactions;
        }
    }) 
}

notifications.forEach(noti => {
noti.addEventListener("click", (e) => {
    console.log(noti)

    if(e.currentTarget) {
        if(noti.childNodes[3]) {
        noti.childNodes[3].classList.remove("new");
        countNotifications();                
        }
        if(noti.classList.contains("new")) {
        noti.classList.remove("new"); 
        countNotifications();      
        }
    }

}); 
console.log(notifications.classList)
})

function removeNotifications() {
    newNotificactions--;
}
