function getInputNum1 () {
	let inputNum1 = Number(document.querySelector("#option1-to-check").value);
	return inputNum1;
}


function getInputNum2 () {
	let inputNum2 = Number(document.querySelector("#option2-to-check").value);
	return inputNum2;
}


let btn_check_number = document.querySelector("#check-number");
btn_check_number.addEventListener("click", checkHighestNumber);
	

function checkHighestNumber (){
	let high;
	let x = getInputNum1();
	let y = getInputNum2();

	// console.log(getInputNum1());
	if (x>y) {
		high = x;
	} else if (y>x) {
		high = y;
	} else {
		high = "They're Equal."
	}	
	document.querySelector("#answer-highest-number").innerHTML = high;
}


function getInputGrade () {
	let inputGrade = Number(document.querySelector("#grade-to-convert").value);
	return inputGrade;
}

let btn_convert_grade = document.querySelector("#convert-grade");
btn_convert_grade.addEventListener("click", convertGrade);

function convertGrade() {
	let convertedGrade;
	let grade = getInputGrade();

	if (grade>=90) {
		convertedGrade = "A";
	} 
	else if (grade>=80) {
		convertedGrade = "B";
	} 
	else if (grade>=70) {
		convertedGrade = "C";
	} 
	else if (grade>=65) {
		convertedGrade = "D";
	} 
	else {
		convertedGrade = "F";
	}

	document.querySelector("#answer-converted-grade").innerHTML = convertedGrade;

}

function getLanguageChoice () {
	let inputLanguage = document.querySelector("#language-choice").value;
	return inputLanguage;
	
}

let btn_change_language = document.querySelector("#change-language");
btn_change_language.addEventListener("click", changeLanguage);


function changeLanguage(){
	let language = getLanguageChoice();
	console.log(language);
	let display;

	switch(language) {
		case "french":
			display = "Bonjour le Monde!";
			break;
		case "deutch":
			display = "Hallo an die Welt!";
			break;
		case "filipino":
			display = "Kamusta sa Mundo!";
			break;
		case "english":
			display = "Hello WOrld!";
			break;
		case "japanese":
			display = "こんにちは世界 (Kon'nichiwa sekai)";
			break;
		case "spanish":
			display = "Hola Mundo!";
			break;
		default:
			display = "error!";
			break;
	}

	document.querySelector("#answer-translated-greeting").innerHTML = display;
}
