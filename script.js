
var settingsMenu= document.querySelector(".setting-menu");
var darkbtnOn = document.querySelector("#dark-btn");
var darkMode = document.querySelector("#darkmode");

function settingsMenuToggle(){
    settingsMenu.classList.toggle('active')
}

function darkbtnActive(){
    darkbtnOn.classList.toggle('dark-btn-on');
    
}
 
function darkbtn(){
   darkMode.classList.toggle("darkMode");
   document.body.classList.toggle("dark-theme")

   if(localStorage.getItem("theme") == "light"){
     localStorage.setItem("theme", "dark" );
   }else{
    localStorage.setItem("theme", "light" );
   }
}


if(localStorage.getItem("theme") == "light"){
    darkbtnOn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") =="dark"){
    darkbtnOn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}else{
     localStorage.setItem("theme", "dark" );
}

// git add
