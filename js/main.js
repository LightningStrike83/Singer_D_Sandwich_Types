console.log('Welcome to the world of Pokemon!');

let grassy = document.querySelector('#grassy');
let watery = document.querySelector('#watery');
let caves = document.querySelector('#caves');
let rocky = document.querySelector('#rocky');
let underground = document.querySelector('#underground');
let hidden = document.querySelector('#hidden');
var grassyCheckbox = document.querySelector('#grassy_checkbox');
var wateryCheckbox = document.querySelector('#watery_checkbox');
var cavesCheckbox = document.querySelector('#caves_checkbox');
var rockyCheckbox = document.querySelector('#rocky_checkbox');
var undergroundCheckbox = document.querySelector('#underground_checkbox');
var hiddenCheckbox = document.querySelector('#hidden_checkbox');

function grassyPokemon() {
    grassyCheckbox.checked = !grassyCheckbox.checked;
}

function wateryPokemon() {
    wateryCheckbox.checked = !wateryCheckbox.checked;
}

function cavesPokemon() {
    cavesCheckbox.checked = !cavesCheckbox.checked;
}

function rockyPokemon() {
    rockyCheckbox.checked = !rockyCheckbox.checked;
}

function undergroundPokemon() {
    undergroundCheckbox.checked = !undergroundCheckbox.checked;
}

function hiddenPokemon() {
    hiddenCheckbox.checked = !hiddenCheckbox.checked;
}

grassy.addEventListener('click', grassyPokemon);
grassyCheckbox.addEventListener('click', grassyPokemon);
watery.addEventListener('click', wateryPokemon);
wateryCheckbox.addEventListener('click', wateryPokemon);
caves.addEventListener('click', cavesPokemon);
cavesCheckbox.addEventListener('click', cavesPokemon);
rocky.addEventListener('click', rockyPokemon);
rockyCheckbox.addEventListener('click', rockyPokemon);
underground.addEventListener('click', undergroundPokemon);
undergroundCheckbox.addEventListener('click', undergroundPokemon);
hidden.addEventListener('click', hiddenPokemon);
hiddenCheckbox.addEventListener('click', hiddenPokemon);