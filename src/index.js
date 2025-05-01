import "./style.css";

class Visible {
    constructor() {
        this.menuToggleButton = document.getElementById("menuToggleButton")
        this.dropdownMenu = document.querySelector(".dropdownMenu");
    }

    addListener() {
        this.menuToggleButton.addEventListener("click", () => {
            this.showMenu();
        })
    }

    showMenu() {
        this.dropdownMenu.style.visibility = "visible";
    }

    hideMenu() {
        
    }
};