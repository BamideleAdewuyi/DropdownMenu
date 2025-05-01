import "./style.css";

const button1 = document.getElementById("menuToggleButton1");
const menu1 = document.getElementById("dropdownMenu1");

class Visible {
    constructor(menuToggleButton, dropdownMenu) {
        this.menuToggleButton = menuToggleButton;
        this.dropdownMenu = dropdownMenu;
        this.addListener();
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
        this.dropdownMenu.style.visibility = "hidden";
    }
};

const visible = new Visible(button1, menu1);