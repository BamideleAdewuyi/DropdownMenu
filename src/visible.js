class Visible {
    constructor(menuToggleButton, dropdownMenu, dropdownMenuOptions) {
        this.menuToggleButton = menuToggleButton;
        this.dropdownMenu = dropdownMenu;
        this.dropdownMenuOptions = dropdownMenuOptions;
        this.menuHeight = this.getHeight();
        this.addListeners();
        this.hideMenu();
    }

    addListeners() {
        this.menuToggleButton.addEventListener("click", () => this.showMenu())

        this.dropdownMenuOptions.forEach(option => {
            option.addEventListener("click", () => {
                this.hideMenu();
                this.menuToggleButton.textContent = option.textContent
            })
        });
    }

    showMenu() {
        this.dropdownMenu.style.visibility = "visible";
        this.dropdownMenu.style.height = `${this.menuHeight}px`;
    }

    hideMenu() {
        this.dropdownMenu.style.visibility = "hidden";
        this.dropdownMenu.style.height = "0";
    }

    getHeight() {
        const menuHeight = this.dropdownMenu.offsetHeight;
        return menuHeight;
    }
};

export default Visible;