// JavaScript Document


// About these buttons

const myCampaignChoice = document.getElementById('myCampaignChoice');
const myPressedButton = document.getElementsByClassName('pressed-button');

myCampaignChoice.addEventListener("click", () => {
	myCampaignChoice.style.backgroundColor = '#d9d9d9';
	myCampaignChoice.style.borderColor = '#d9d9d9';
});

$("button").mouseout(function() {
	$("button").css("background-color", "#d9d9d9");	
});

for (let i = 0; i < myPressedButton.length; i += 1) {
	myPressedButton[i].style.color = '#40752d';	
}