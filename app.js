var navLinks = document.getElementsByClassName('nav-links');


document.querySelector(".menu-wrapper").addEventListener("click", function() {
    document.querySelector(".nav-background").classList.toggle("open");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.display = 'block';
    }
});

//document.querySelector("#home-link").addEventListener("click", function() {
  //  document.querySelector(".nav-background").classList.toggle("open");
//});

document.querySelector("#about-link").addEventListener("click", function() {
    document.querySelector(".nav-background").classList.toggle("open");
});

document.querySelector("#contact-link").addEventListener("click", function() {
    document.querySelector(".nav-background").classList.toggle("open");
});

let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 ||  
                     userAgentString.indexOf("rv:") > -1;

//document.querySelector(".nav-background").style.display = "block";