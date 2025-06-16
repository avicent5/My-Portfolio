let contactMeButton = document.querySelector('.contactInfo_popup');
contactMeButton.style.display = "none";

let displayContactDiv = () => {
contactMeButton.style.display = "block";
}

let closeContactInfoDiv = document.querySelector('.closeContactDivBtn')
let closeContactDiv = () => {
   contactMeButton.style.display = "none"; 
}