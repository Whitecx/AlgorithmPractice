const arr = [5,2,4,6,1,3]

const insertionSort = (arr) => {
	console.log(`Array: ${arr}`);
	let sorted = [];
	sorted.push(arr[0]);
	for(let i=1; i< arr.length; i++){
		let current = arr[i];
		console.log(`Sorting ${current}`);
		let index = place(current, sorted);
		sorted.splice(index, 0, current);
	}
	return sorted
}

const place = (elem, arr) => {
	console.log(`Placing ${elem} in ${arr}`);
	let index = arr.length;
	for(let i = 0; i < arr.length; i++){
		if(elem < arr[i]){
			index = i;
			console.log(`New position is ${i}`);
			return index;
		}
	}
	console.log(`LWN ${index}`);
	return index;
}

//TEST
let sorted = insertionSort(arr);
console.log(sorted);
