// 0. make a function
// 1. get input
// 2. create a placeholder variable to hold my result
// 3. figure out how to grab each word individually

//let phrase = ["rain rain go away"];
//	console.log(phrase);

capitalize();

function capitalize(){
	let arr = [];
	let phrase = "rain rain go away";
	let capitalizeLetters = phrase.split(" ");
	for (let i = 0; i < capitalizeLetters.length; i++){
		arr.push(capitalizeLetters[i].charAt(0).toUpperCase() + capitalizeLetters[i].slice(1));
	}
	console.log(arr);
}