let button = document.querySelector(`nav .btn`);

let sidemenu = document.querySelector(`.sidemenu`);

function sidebarToggler() {
    sidemenu.classList.toggle("bar");
    if (sidemenu.classList.contains("bar") == true) 
    {button.innerHTML = `<i class="bi bi-x-lg"></i>`;}
    else
    {button.innerHTML = `<i class="bi bi-list"></i>`;}
}

button.addEventListener("click", sidebarToggler);