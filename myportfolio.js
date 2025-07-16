document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my portfolio!");
    });
    
    const greeting = document.getElementById("greeting");
    
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
    greeting.textContent = "Good Morning!";
    } else if (currentHour < 18) {
    greeting.textContent = "Good Afternoon!";
    } else {
    greeting.textContent = "Good Evening!";
    }
    
    const themeToggleButton = document.getElementById("theme-toggle");
    
    themeToggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
   
    if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "Switch to Light Mode";
    } else {
    themeToggleButton.textContent = "Switch to Dark Mode";
    }
    

    if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    } else {
    localStorage.setItem("theme", "light");
    }
    });
    
    window.addEventListener("load", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleButton.textContent = "Switch to Light Mode";
    }
    });
