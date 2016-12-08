export default class Finder {
	
	findIndexOfObjInArr(arr, strField, index) {
		for (let i in arr) {
			if(arr[i][strField] === index) {
				return i;
			}
		}
	}

}