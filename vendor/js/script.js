// dropdown button starts
function dropDown() {
    document.getElementById("menuContent").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// dropdown button ends


// login modal
function login(){
    document.getElementById('login').style.display='flex';
    document.getElementById('register').style.display='none';
}
function register(){
    document.getElementById('register').style.display='flex';
    document.getElementById('login').style.display='none';
}
function loginClose(){
    document.getElementById('login').style.display='none';
}
function registerClose(){
    document.getElementById('register').style.display='none';
}