import "./style.css"
import Visible from "./visible";

const button1 = document.getElementById("menuToggleButton1");
const menu1 = document.getElementById("dropdownMenu1");
const dropdownMenuOptions1 = document.querySelectorAll(".dropdownMenuOptions1")

const button2 = document.getElementById("menuToggleButton2")
const menu2 = document.getElementById("dropdownMenu2");
const dropdownMenuOptions2 = document.querySelectorAll(".dropdownMenuOptions2")

const visible = new Visible(button1, menu1, dropdownMenuOptions1);
const visible2 = new Visible(button2, menu2, dropdownMenuOptions2);