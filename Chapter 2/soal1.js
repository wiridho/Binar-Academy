function changeWord(selectedText, changedText, text) {
	const myWord = text.split(" ")
	for (let index = 0; index < myWord.length; index++) {
		if (myWord[index] === selectedText) {
			myWord[index] = changedText;
		}
	}
	return myWord.join(" ")
}


const kalimat1 = 'Andi Sangat mencintai kamu selamanya'
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintamu padaku"
console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "sinabung", kalimat2));